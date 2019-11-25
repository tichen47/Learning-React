# React basic
1. 声明式开发
   * jQuery是操作dom的命令式开发
2. 可以与其他框架并存
   * 因为react可以只修改单一组件
3. 组件化
4. 单项数据流
   * 父组建可以向子组建传递内容，但是子组建不允许改变传来的内容，传来的内容为read only
5. 视图层框架
   * 层数过多，传值复杂
6. 函数式编程
   * 方便自动化测试

## Responsive design & Event binding
1. use 'this.state' to store data
2. js code in JSX wrapped in {}
3. bind(this) to change the target of listener
4. use setState to change the value in state
   * Can't change directly 

## React algorithm
1. immutable: canot change state directly, which is used for performance optimizing 

## ES6
1. ... 展开运算符
   * ex: list:[...list, newValue]

## JSX 细节
1. comment: 
   * {/* comment */}
2. 使用className替代class来使用stylesheet
3. 如果不希望内容被转意：使用dangerouslySetInnerHTML={{__html: item}}
   * item为替换内容
4. 使用label来光标聚焦时，使用htmlFor替代for

## 拆分组建 & 组建互相通讯
1. 父=>子
   * 父组建通过属性向子组建传递数据，子组建通过this.props.属性获取父组建传来的数据
2. 子=>父
   * 子组建调用父组建的方法来改变父组建的数据，父组建传递数据和方法给子组建（要强制绑定方法的this，否则子组建找不到方法），然后子组建在对应的方法中调用对应父组建的方法并传递参数，通过父组建方法改变数据，数据改变从而重新渲染页面

## 代码优化
1. 把bind()方法写在函数的constrctor里面，目的是提升性能
2. 把jsx逻辑封装在函数里时，需要把整个逻辑return
3. 新版本react中推荐在修改state数据的时候使用this.setState((prevState)=>({}))
   1. prevState = this.state
   2. 原因是会把set异步执行提升性能
4. 循环数组需要把key加在循环体最外层

