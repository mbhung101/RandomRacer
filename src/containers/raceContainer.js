import React, { Component } from 'react'
import RaceInput from '../components/raceInput'
import Racer from '../components/racer'

export default class RaceContainer extends Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
    this.onBackButtonClick = this.onBackButtonClick.bind(this)
    this.onNameSubmit = this.onNameSubmit.bind(this)
  }

  onBackButtonClick(e){
    e.preventDefault()
    this.setState({
      players: []
    })
  }

  onNameSubmit(event){
    event.preventDefault()
    var players = []
    for (var i = 0; i < event.target.children[0].children.length; i++){
    players.push(event.target.children[0].children[i].children[0].children[0].value)
      }
    this.setState({
      players: players
    })
  }

  render(){
    if (this.state.players.length===0){
      return (
          <div>
            <RaceInput onNameSubmit={this.onNameSubmit}/>
          </div>
      )
    } else {
      return (
        <div>
          <Racer names={this.state.names} players={this.state.players} onBackButtonClick={this.onBackButtonClick}/>
        </div>
      )
    }
  }
}
