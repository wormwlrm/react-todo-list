import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import './ToDoItem.scss';

class ToDoItem extends Component {
  static defaultProps = {
    todo: {
      id: '',
      value: '111',
      checked: false
    },
    onToggle: () => {
      console.error('onToggle undefined');
    },
    onDelete: () => {
      console.error('onDelete undefined');
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('HERE', this.props.todo.checked, nextProps.todo.checked);
  //   return this.props.todo.checked !== nextProps.todo.checked;
  // }

  render() {
    console.log('TODOITEM RENDER');

    const { onToggle, onDelete, todo} = this.props;
    return (
      <ListGroup.Item className={`todo-item ${todo.checked ? 'checked' : ''}`}>
        <div className="todo-item-delete-button" onClick={(e) => {
          onDelete(todo.id);
        }}>✖</div>
        <div className="todo-item-value" onClick={(e) => {
          onToggle(todo.id);
        }}>
          { todo.value }
        </div>
      </ListGroup.Item>
    );
  }
}

export default ToDoItem;
