import React from 'react';
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Name:</InputGroupAddon>
            <Input placeholder="your name" />
          </InputGroup>
          <br />
          <Input type="textarea" />
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>
      </Form>
    );
  }
}