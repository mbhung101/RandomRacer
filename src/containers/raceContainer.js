import React, { Component } from 'react'
import RaceInput from '../components/raceInput'
import Racer from '../components/racer'

export default class RaceContainer extends Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
    this.onNumberSubmit = this.onNumberSubmit.bind(this)
    this.onBackButtonClick = this.onBackButtonClick.bind(this)
  }

  onNumberSubmit(event){
    event.preventDefault()
    var numPlayers = parseInt(event.target.children[0].firstElementChild.value)
    var playerArr = []
    for (var i=0; i<numPlayers; i++){
      playerArr.push(0)
    }
    this.setState({
      players: playerArr
    })
  }

  onBackButtonClick(e){
    e.preventDefault()
    this.setState({
      players: []
    })
  }

  render(){
    if (this.state.players.length===0){
      return (
          <div>
            <RaceInput onNumberSubmit={this.onNumberSubmit} players={this.state.players}/>
          </div>
      )
    } else{
      return (
        <div>
          <Racer players={this.state.players} onBackButtonClick={this.onBackButtonClick}/>
        </div>
      )
    }
  }
}
