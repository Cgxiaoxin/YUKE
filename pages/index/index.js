Page({
  data: {
    activeTab: 'private', // 'private', 'group', 'class'
    tabs: [
      { id: 'private', name: '私教' },
      { id: 'group', name: '超模机团课' },
      { id: 'class', name: '超模班' }
    ],
    bannerUrl: '/images/banner.png',
    storeInfo: {},
    coaches: [],
    dates: [],
    selectedDateIndex: 0,
    courses: []
  },

  onLoad: function () {
    this.generateDates();
    this.fetchHomePageData();
  },

  fetchHomePageData: function() {
    wx.request({
      url: 'http://localhost:3000/api/home', // Please use your actual server URL
      method: 'GET',
      success: (res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setData({
            storeInfo: data.storeInfo,
            coaches: data.coaches,
            courses: data.courses
          });
        } else {
          console.error('Failed to fetch home page data:', res.data.message);
        }
      },
      fail: (err) => {
        console.error('Request failed:', err);
      }
    })
  },

  switchTab: function (e) {
    const tabId = e.currentTarget.dataset.id;
    this.setData({
      activeTab: tabId
    });
  },
  
  selectDate: function(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selectedDateIndex: index
    });
    // Here you would typically fetch data for the selected date
  },

  generateDates: function() {
    const dates = [];
    const today = new Date();
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.getDate(),
        weekday: weekdays[date.getDay()]
      });
    }
    this.setData({
      dates: dates
    });
  }
});
