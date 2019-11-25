import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['Learn English', 'Do Leetcode']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) =>  {
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],      // ...this.state.list 展开之前数组
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    // Immutable: can't change state directly 
    const list = [...this.state.list]; // copy the list
    list.splice(index, 1); // delete 1 item with index
    this.setState({
      list: list
    })
  }
}

export default TodoList;