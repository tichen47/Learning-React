import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变时，render函数会重新执行
    this.state = {
      inputValue: '',
      list: ['Learn English', 'Do Leetcode']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">Input</label>
          <input 
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) =>  {
      return (
        <TodoItem
          key={item} 
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange() {
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],      // ...this.state.list 展开之前数组
      inputValue: '' 
    }), () => {
      console.log(this.ul.querySelectorAll('div').length);
    });
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]; // copy the list
      list.splice(index, 1); // delete 1 item with index
      return {list};
    });
  }
}

export default TodoList;