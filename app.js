App({
  onLaunch() {
    wx.login({
      success: res => {
        if (res.code) {
          // Attempt to get user info
          wx.getUserProfile({
            desc: '用于完善会员资料', // The prompt for authorization
            success: (userInfoRes) => {
              this.doLogin(res.code, userInfoRes.userInfo);
            },
            fail: () => {
              // User refused, login with code only
              this.doLogin(res.code, null);
            }
          })
        } else {
          console.error('Failed to get login code:', res.errMsg);
        }
      }
    })
  },

  doLogin: function(code, userInfo) {
    wx.request({
      url: 'http://localhost:3000/api/login', // Please use your actual server URL
      method: 'POST',
      data: {
        code: code,
        userInfo: userInfo
      },
      success: (res) => {
        if (res.data.success) {
          console.log('Login successful:', res.data.data);
          this.globalData.userInfo = res.data.data;
          wx.setStorageSync('userInfo', res.data.data);

          // You can add a global callback here if other pages need to know the login is complete
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res.data.data);
          }
        } else {
          console.error('Login failed on server:', res.data.message);
        }
      },
      fail: (err) => {
        console.error('Request to server failed:', err);
      }
    })
  },

  globalData: {
    userInfo: null
  }
})
