Page({
  data: {
    activeTab: 'community', // 'community', 'courses'
    tabs: [
      { id: 'community', name: '社群' },
      { id: 'courses', name: '课程' }
    ],
    leaderboard: [
      {
        rank: 1,
        avatarUrl: '/images/coaches/eileen.png',
        name: '晓晓',
        value: '1100 堂课',
        label: '执教里程碑'
      },
      {
        rank: 2,
        avatarUrl: '/images/coaches/dawn.png',
        name: '晓晓',
        value: '1 周年',
        label: '已加入'
      }
    ],
    livePhotos: [
      '/images/live/1.png',
      '/images/live/2.png',
      '/images/live/3.png',
      '/images/live/4.png',
      '/images/live/5.png',
      '/images/live/6.png',
      '/images/live/7.png',
      '/images/live/8.png',
      '/images/live/9.png'
    ]
  },

  switchTab: function (e) {
    const tabId = e.currentTarget.dataset.id;
    this.setData({
      activeTab: tabId
    });
  }
});
