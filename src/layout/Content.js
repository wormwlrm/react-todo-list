import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ToDoList from '../components/ToDoList';
import './Content.scss';

class Content extends Component {
  render() {
    return (
      <main className="main bg-dark">
        <Container>
          <Row>
            <Col xs={12} sm={{span: 8, offset: 2}}>
              <ToDoList></ToDoList>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Content;
