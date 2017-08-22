import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class RaceInput extends Component {
  render (){
    return(
      <div>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"250px",paddingTop:"100px"}}>
            <h2> How many racers? </h2>
            <Form onSubmit={this.props.onNumberSubmit}>
              <Form.Field>
                <input type="number"/>
              </Form.Field>
              <Button color="orange" type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
