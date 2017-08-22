import React, { Component } from 'react'
import { List } from 'semantic-ui-react'


export default class PodiumRender extends Component {

  constructor(props){
    super(props)
    this.podiumCreator = this.podiumCreator.bind(this)
  }

  podiumCreator(players){
    return players.map((player) =>
    <List.Item> {player} </List.Item>
  )}

  render (){
    return(
      <div>
        <h2>Podium</h2>
        <List ordered>
          {this.podiumCreator(this.props.players)}
        </List>
      </div>
    )
  }
}
