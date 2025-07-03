const db = require('../db');

const getHomePageData = (req, res) => {
    // In a real application, you might get storeId from request
    // and fetch data specific to that store.
    
    // For now, we'll fetch some mock data.
    // In the future, this will be replaced with actual DB queries.

    const responseData = {
        storeInfo: {
            name: 'FOCUS',
            address: '上海市黄浦区西藏南路758号前社607...',
            distance: '1190.45km',
            imageUrl: '/images/store.png' // This should be a full URL in a real app
        },
        coaches: [
            { id: 1, name: 'Eileen', price: '850.0', avatarUrl: '/images/coaches/eileen.png' },
            { id: 2, name: 'Cheer', price: '1000.0', avatarUrl: '/images/coaches/cheer.png' },
            { id: 3, name: '晓晓', price: '688.0', avatarUrl: '/images/coaches/dawn.png' }
        ],
        courses: [
            {
                time: '12:10',
                title: 'FULL BODY Level1超模机团课',
                level: 1,
                price: 298,
                coach: 'FOCUS储值卡208.6',
                tags: ['午休碰一碰', '暴汗的快乐'],
                avatarUrl: '/images/coaches/eileen.png'
            },
            {
                time: '15:00',
                title: 'FULL BODY Level2超模机团课',
                level: 2,
                price: 298,
                coach: 'FOCUS储值卡208.6',
                tags: ['挑战一节课燃脂500卡'],
                avatarUrl: '/images/coaches/eileen.png'
            },
            {
                time: '18:10',
                title: 'FULL BODY Level2超模机团课',
                level: 2,
                price: 298,
                coach: 'FOCUS储值卡208.6',
                tags: ['下班第一练', '消除一整天疲惫', '精准塑形全身'],
                avatarUrl: '/images/coaches/dawn.png'
            }
        ]
    };

    res.json({
        success: true,
        data: responseData
    });
};

module.exports = {
    getHomePageData
};
