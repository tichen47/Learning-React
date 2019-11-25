import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';  // 如果结尾不写js，会自动补全js后缀

// JSX自定义标签必须大写开头
ReactDOM.render(<TodoList />, document.getElementById('root'));

