// pages/parentSetOrderInfo/parentSetOrderInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号码
    address_full: '', // 详细地址信息
    address_province: '', // 省份
    address_city: '',  // 城市
    address_dict: '',  // 区
    address_road: '',  // 街道
    longitude: '', // 经度
    latitude: '',  // 纬度
    grade: '',    // 年级
    classification: '', // 科目
    time: '', // 补课时间
    status: '', // 学生具体情况

    chooseGradeIndex: 0, // 科目选择下标
    chooseGradeArray: [
      "小学",
      "初中",
      "高中",
      "本科"
    ],
    
  },

  /**
   * 选择地址
   */
  chooseAddress() {
    wx.chooseLocation({
      success: this.dealWithGetLocationSuccess.bind(this)
    })
  },

  /**
   * 处理成功获取地址回调
   */
  dealWithGetLocationSuccess(res) {
    let full = res.address;
    let lo = res.longitude;
    let la = res.latitude;

    // 提取省市区
    let province = full.match("^(.*)省.*$") == null ? "" : full.match("^(.*)省.*$")[1];
    let city = full.match("^.*省(.*)市.*$") == null ? "" : full.match("^.*省(.*)市.*$")[1];
    let dict = full.match("^.*市(.*)区.*$") == null ? "" : full.match("^.*市(.*)区.*$")[1];
    let road = full.match("^.*区(.*)$") == null ? "" : full.match("^.*区(.*)$")[1];

    // 绑定数据
    this.setData({
      address_full: full,
      address_province: province,
      address_city: city,
      address_dict: dict,
      address_road: road,
      longitude: lo,
      latitude: la
    });
    
  },

  /**
   * 选择年级回调
   */
  bindPickerChange(e) {
    this.setData({
      chooseGradeIndex: e.detail.value
    });

    let result = this.data.chooseGradeArray[this.data.chooseGradeIndex];
    this.setData({
      grade: result
    });

  },

  /**
   * 选择时间回调
   */
  bindTimeChange(e) {
    
    this.setData({
      time: e.detail.value
    });
    console.log(this.data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})