import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class NameInput extends Component {
  constructor(props){
    super(props)
  }
  render(props){
    return (
      <div style={{paddingTop:50}}>
      <h3> Input Names </h3>
      <Form onSubmit={this.props.onNameSubmit}>
        <Form.Field>
          {this.props.nameBoxes}
        </Form.Field>
        <Button color="orange" type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}
