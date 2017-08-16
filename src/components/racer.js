import React, { Component } from 'react'
import PodiumRender from './podiumRender'

export default class Racer extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: this.props.players
    }
  }

  render (){
    return(
      <div>
        <PodiumRender players= {this.state.players}/>
      </div>
    )
  }
}
