Component({
  //组件间代码复用机制	
  mixins: [],
  //组件内部状态
  data: {},
  //props 为外部传过来的属性，可指定默认属性，不能在自定义组件内部代码中修改
  props: {
    imageUrl: {
      type: String,
      value: ''
    }
  },
  //组件生命周期函数，组件创建完毕时触发
  didMount() {},
  //组件生命周期函数，组件更新完毕时触发
  didUpdate() {},
  //组件生命周期函数，组件删除时触发
  didUnmount() {},
  //methods 中可以定义任意自定义方法。
  methods: {},
});
