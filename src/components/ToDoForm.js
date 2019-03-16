import React, { Component } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import './ToDoForm.scss';

class ToDoForm extends Component {
  static defaultProps = {
    input: '',
    onChange: () => {
      console.error('onChange undefined');
    },
    onCreate: () => {
      console.error('onCreate undefined');
    },
    onHitEnter: () => {
      console.error('onHitEnter undefined');
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props.input, nextProps.input, this.props.input !== nextProps)
  //   return this.props.input !== nextProps.input;
  // }

  render() {
    const { onChange, onHitEnter, onCreate, input } = this.props;
    console.log('TODOFORM RENDER');

    return (
      <InputGroup size="lg" className="todo-form">
        <FormControl
          placeholder="Enter something"
          aria-label="Enter something"
          value={input}
          onChange={onChange}
          onKeyPress={onHitEnter}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary"
          onClick={onCreate}>+</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default ToDoForm;
