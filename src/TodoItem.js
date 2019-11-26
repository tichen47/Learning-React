import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

  render() {
	const { content, test } = this.props;
	// JSX -> JS 对象 -> 真实的DOM
  	return (
		<div onClick={this.handleClick}>
			{test} - {content}
		</div>
	)
  }

  handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}
}

// Constrain prop type, isRequired make the value non-empty
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number,
}

// Default value
TodoItem.defaultProps = {
	test: 'Default_test'
}

export default TodoItem;