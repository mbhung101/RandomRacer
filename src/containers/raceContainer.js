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
    var nameDivs = [event.target.children[0].children]
    var names = []
    for (var i = 0; i < nameDivs[0].length; i++){
    names.push(event.target.children[0].children[i].children[0].children[0].value)
      }
    this.setState({
      players: names,
      names: true
    })
  }

  render(){
    if (this.state.players.length===0){
      return (
          <div>
            <RaceInput onNameSubmit={this.onNameSubmit} onNumberSubmit={this.onNumberSubmit} players={this.state.players}/>
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
