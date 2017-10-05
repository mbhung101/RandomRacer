import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import NameInput from './nameInput'

export default class RaceInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      players: this.props.players,
      nameDisplay: false
    }
    this.onNumberSubmit = this.onNumberSubmit.bind(this)
    this.nameBoxes = this.nameBoxes.bind(this)
    this.onNameSubmit = this.onNameSubmit.bind(this)
  }

  onNumberSubmit(event){
    event.preventDefault()
    var numPlayers = parseInt(event.target.children[0].firstElementChild.value)
    var playerArr = []
    for (var i=0; i<numPlayers; i++){
      playerArr.push(0)
    }
    this.setState({
      players: playerArr,
      nameDisplay: true
    })
  }

  onNameSubmit(event){
    event.preventDefault()
    var numPlayers = parseInt(event.target.children[0].firstElementChild.value)
    var playerArr = []
    for (var i=0; i<numPlayers; i++){
      playerArr.push(0)
    }
    this.setState({
      players: playerArr,
      nameDisplay: true
    })
  }

  nameBoxes(){
    return this.state.players.map((player)=>
      <div style={{width:"250",paddingTop:"5", paddingBottom:"5"}}>
      <Form.Field>
        <input type="text"/>
      </Form.Field>
      </div>
    )
  }

  render (){
    if (this.state.nameDisplay === false){
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
      <NameInput onNameSubmit={this.onNameSubmit()} nameBoxes={this.nameBoxes()}/>
    )
  }
}
}
