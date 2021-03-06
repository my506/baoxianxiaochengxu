// pages/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picurl:'../../images/head_portrait.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestUrl(options.agent_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 我的代理接口
   */
  requestUrl: function (agent_id) {
    var that = this
    var data = {
      agent_id: agent_id
    }
    console.log(agent_id)
    getApp().Coca.http_get("index/user_agent", data, function (e) {
      if (e.code == 200) {
        that.setData({
          picurl: getApp().data.imageDomain + e.data.picurl,
          username:e.data.username,
          moble: e.data.phone
        })
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  }
})