import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import NameInput from './nameInput'

export default class RaceInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      nameDisplay: 0
    }
    this.onNumberSubmit = this.onNumberSubmit.bind(this)
    this.nameBoxes = this.nameBoxes.bind(this)
  }

  onNumberSubmit(event){
    event.preventDefault()
    this.setState({
      nameDisplay: parseInt(event.target.children[0].firstElementChild.value),
    })
  }

  nameBoxes(){
    var arr = Array.apply(null, Array(this.state.nameDisplay)).map(Number.prototype.valueOf,0)
    return arr.map((player)=>
      <div style={{width:"250",paddingTop:"5", paddingBottom:"5"}}>
      <Form.Field>
        <input type="text"/>
      </Form.Field>
      </div>
    )
  }

  render (){
    if (this.state.nameDisplay === 0){
    return(
      <div>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"250px",paddingTop:"100px"}}>
            <h2> How many racers? </h2>
            <Form onSubmit={this.onNumberSubmit}>
              <Form.Field>
                <input type="number"/>
              </Form.Field>
              <Button color="orange" type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  } else{
    return (
      <NameInput onNameSubmit={this.props.onNameSubmit} nameBoxes={this.nameBoxes()}/>
    )
  }
}
}
