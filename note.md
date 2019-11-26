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

## PropTypes
1. propTypes: check the type of prop value
2. defaultProps: default value

## Props, state & render
1. 当组件的state或者props发生改变的时候，render函数会重新执行
2. 当父组件的render函数被执行时，他的所有子组件都会被重新执行

## React 使用虚拟DOM创建/修改web逻辑
1. state 数据
2. JSX 模版
3. 数据 + 模版 生成虚拟DOM(虚拟DOM就是一个js对象，用它来描述真实dom)
   * DOM: Document object model
   * 损耗性能但是极少：js创建js对象消耗小，但是创建/比对dom相关会需要调用web application api，消耗极大
   * ['div', {id:'abc'}, ['span', {}, 'hello world']]   
4. 使用虚拟DOM生成真实的DOM显示web
   * <div id='abc'><span>hello world</span></div>
5. state 发生改变
6. 数据 + 模版 生成新的虚拟DOM
   * 由于不用生成新的真实dom, 极大提升性能
   * ['div', {id:'abc'}, ['span', {}, 'bye bye']]
7. 比较原始和新的虚拟DOM，找到区别为span中的内容
   * 由于不用比较两个真实DOM, 极大提升性能
8. 直接操作DOM, 改变span中的内容

## JSX转换为真实DOM流程
* JSX -> createElement -> 虚拟DOM (JS对象) -> 真实DOM
* 使用createElement改写JSX
  * return <div><span>item</span></div>
  * return React.createElement('div', {}, React.createElement('span', {}, 'item'))
* 和Vue使用虚拟DOM方式几乎一样

## 使用虚拟DOM优点
1. 性能提升
2. 使得跨端应用得以实现：React Native
   * 真实DOM无法被安卓等移动端识别，但是虚拟DOM可以both被网页和原生应用识别

## 虚拟DOM中的diff算法
1. 可以把多次setStates合并为一次来提升速度
2. 同层比对，如果上层不一致则停止比对
3. 通过key来提升比对性能
   * 不要使用index作为key，因为index会发生改变
   * 使用稳定内容作为key值