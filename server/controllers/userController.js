const db = require('../db');
const https = require('https');

// You need to fill in your AppID and AppSecret here
const APP_ID = 'YOUR_APP_ID'; 
const APP_SECRET = 'YOUR_APP_SECRET';

const getOpenId = async (code) => {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    if (parsedData.errcode) {
                        reject(new Error(parsedData.errmsg));
                    } else {
                        resolve(parsedData);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

const loginOrRegister = async (req, res) => {
    try {
        const { code, userInfo } = req.body;
        if (!code) {
            return res.status(400).json({ success: false, message: "Code is required" });
        }

        const weixinRes = await getOpenId(code);
        const { openid } = weixinRes;

        // Check if user exists
        db.query('SELECT * FROM users WHERE openid = ?', [openid], (err, results) => {
            if (err) {
                return res.status(500).json({ success: false, message: err.message });
            }

            if (results.length > 0) {
                // User exists, return user info
                res.json({
                    success: true,
                    message: "Login successful",
                    data: results[0]
                });
            } else {
                // User does not exist, create a new user
                const newUser = {
                    openid: openid,
                    nickname: userInfo ? userInfo.nickName : null,
                    avatar_url: userInfo ? userInfo.avatarUrl : null,
                };
                db.query('INSERT INTO users SET ?', newUser, (err, insertResult) => {
                    if (err) {
                        return res.status(500).json({ success: false, message: err.message });
                    }
                    // Return the new user's info
                    res.json({
                        success: true,
                        message: "User registered successfully",
                        data: { id: insertResult.insertId, ...newUser }
                    });
                });
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    login: loginOrRegister
};
