Component({
  mixins: [],
  data: {
    userName: '',
    radioData: [
      {
        text: '男',
        value: 0,
        checked: true
      },
      {
        text: '女',
        value: 1,
        checked: false
      }
    ],
    datePick: '选择您的出生日期',
    gender: 0
  },
  props: {},
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    handleInput: function(e) {
      this.setData({
        userName: e.detail.value
      });
    },
    handleRadioChange: function(e) {
      this.setData({
        gender: e.detail.value
      });
    },
    handleBtnFind: function() {
      let name = this.data.userName;
      let date = this.data.datePick;
      let gender = this.data.gender === 0 ? '男' : '女';
      my.confirm({
        title: '提示',
        content: name + '--' + gender + '--' + date,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success: (result) => {
          if (result.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        },
      });
    },
    handleDatePicker: function() {
      my.datePicker({
        success: (res) => {
          console.log(res);
          this.setData({
            datePick: res.date
          });
        },
        fail: (res) => {
          if (res.error === '11, 用户取消操作') {
            this.setData({
              datePick: 选择您的出生日期
            });
          }
        }
      });
    }
  },
});
