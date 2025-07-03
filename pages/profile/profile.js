Page({
  data: {
    userInfo: {
      avatarUrl: '/images/avatar.png',
      id: '2507029845133D'
    },
    balance: 0.00,
    membershipCard: null, // or an object with card details
    menuItems: [
      {
        icon: '/images/icons/appointment.png',
        title: '我的预约'
      },
      {
        icon: '/images/icons/reward.png',
        title: '推荐奖励'
      },
      {
        icon: '/images/icons/coupon.png',
        title: '我的代金券'
      },
      {
        icon: '/images/icons/phone.png',
        title: '绑定手机号'
      }
    ]
  },

  onLoad: function (options) {

  },
  
  // Event handlers for menu items can be added here
  handleMenuItemTap: function(e) {
    const title = e.currentTarget.dataset.title;
    wx.showToast({
      title: `${title} 功能开发中`,
      icon: 'none'
    })
  }
});
