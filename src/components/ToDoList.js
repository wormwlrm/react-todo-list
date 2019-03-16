import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import { Card, ListGroup } from 'react-bootstrap';
import './ToDoList.scss';

class ToDoList extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, value: 'Welcome', checked: false },
      { id: 1, value: 'Hello', checked: true },
      { id: 2, value: 'Farewell', checked: false }
    ]
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  };

  onCreate = () => {
    const { input, todos } = this.state;
    if (!input) {
      return;
    }
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        value: input,
        checked: false
      })
    })
  }

  onHitEnter = (e) => {
    if (e.key === 'Enter') {
      this.onCreate();
    }
  }

  onDelete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      })
    })
  }

  onToggle = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    })
  }

  render() {
    const { input, todos } = this.state;
    const { onHitEnter, onCreate, onChange, onDelete, onToggle } = this;
    console.log('TODOLIST RENDER');

    return (
      <Card className="todo-list">
        <Card.Body>
          <ToDoForm
            input={input}
            onHitEnter={onHitEnter}
            onCreate={onCreate}
            onChange={onChange}>
          </ToDoForm>
          <Card>
            <ListGroup variant="flush">
              { todos.map((todo) => {
                  return <ToDoItem
                    todo={todo}
                    key={todo.id}
                    onDelete={onDelete}
                    onToggle={onToggle}>
                  </ToDoItem>
                }) }
            </ListGroup>
          </Card>

          {/* { JSON.stringify(this.state.todos) } */}
        </Card.Body>
      </Card>
    );
  }
}

export default ToDoList;
