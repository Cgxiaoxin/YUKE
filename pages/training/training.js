Page({
  data: {
    userInfo: {
      avatarUrl: '/images/avatar.png',
      id: '2507029845133D',
      joinDays: 2
    },
    stats: {
      totalSessions: 0,
      totalDuration: 0
    },
    calendar: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      days: [],
      trainedDays: [5, 12, 18, 25] // Example data
    }
  },

  onLoad: function (options) {
    this.generateCalendar(this.data.calendar.year, this.data.calendar.month);
  },

  generateCalendar: function (year, month) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: '', trained: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        trained: this.data.calendar.trainedDays.includes(i)
      });
    }
    this.setData({
      'calendar.days': days
    });
  },
  
  viewLastMonthReport: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
});
