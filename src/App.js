import { useEffect } from 'react';
import React from "react";
import { connect } from 'react-redux'
import { addToList } from './actions/todo';
import './App.css';
import { Button, Form, Card, Input } from 'semantic-ui-react';

const App = (props) => {
  const { todo, addToList } = props;
  let textInput = React.createRef();

  useEffect(() => {
    console.log(todo);
  }, [todo])

  return (

    <>
      <Form>
        <Form.Field>
          <div className="ui input">
            <input ref={textInput} placeholder='First Name' />
          </div>
        </Form.Field>
      </Form>
      <Button onClick={() => addToList({ type: textInput.current.value })}>Submit</Button>
      <br></br>

      {todo.list.map(item => {
        console.log(item.type, 'ITEM');
        return (
          <Card.Group>
            <Card>
              <Card.Content>{item.type}</Card.Content>
            </Card>
          </Card.Group>
        )
      })}
    </>
  );
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToList: (data) => dispatch(addToList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
