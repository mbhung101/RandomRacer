import React, { Component } from 'react'
import RaceInput from '../components/raceInput'
import Racer from '../components/racer'

export default class RaceContainer extends Component {
  constructor(){
    super()
    this.state = {
      players: [],
      names: false
    }
    this.onBackButtonClick = this.onBackButtonClick.bind(this)
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
