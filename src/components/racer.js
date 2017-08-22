import React, { Component } from 'react'
import PodiumRender from './podiumRender'
import RandomRace from './randomRace'
import { List, Button } from 'semantic-ui-react'


export default class Racer extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: this.props.players
    }
  }

  render (){
    return(
      <div className = "ui container" style={{marginTop:20}}>
        <div style={{padding:20}}>
          <RandomRace players= {this.state.players} />
        </div>
        <div style={{paddingLeft:20}}>
          <Button color="orange" onClick= {this.props.onBackButtonClick}> Back </Button>
        </div>
      </div>
    )
  }
}
