import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
export default class RandomRace extends Component {

  constructor(){
    super()
    this.state = {
      players: []
    }
    this.randomRace = this.randomRace.bind(this)
    }

  randomRace (players) {
    var final = []
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function remove1000 (arr){
      var ans = []
      for (var i in arr){
        if (arr[i] >= 1000){
          ans.push(arr[i])
        }
      }
      return ans
    }

    function nullCheck (arr){
      for (var i in arr){
        if (arr[i] !== null){
          return false
        }
      }
      return true
    }

    function multiResolver (arr){
      var nums = []
      for (var i in arr ){
        nums.push(arr[i][1])
      }
      var newnums = nums.sort(function(a,b){
      return b-a
      })
      var ans = []
      for (var j in newnums){
        for (var k in arr){
          if (arr[k][1] === newnums[j]){
            ans.push(arr[k])
          }
        }
      }
      return ans
    }
  var places = []
  raceRunner(players)
    function raceRunner (players){
      if (nullCheck(players)){
        return places
      } else{
        var finishers = []
        var removes = remove1000(players)
        for (var i in players){
          if (removes.includes(players[i])){
            var finisher = [parseInt(i)+1,players[i]]
            finishers.push(finisher)
            players[i] = null
          } else{
            if (players[i] !==null){
              players[i] += getRandomInt(1,25)
            }
          }
        }
        if (finishers.length > 0){
        places.push(finishers)}
        raceRunner(players)
      }
    }
    var counter = 1
    for (var j in places){
      if (places[j].length > 1){
        var sort = multiResolver(places[j])
        for (var z in sort){
          final.push("Player " + sort[z][0])
          counter ++
        }
      } else{
        var position = parseInt(j) + 1
        final.push("Player " + places[j][0][0])
        counter ++
      }
    }
    return final.map((player) =>
    <List.Item> {player} </List.Item>
    )
  }

  render(){
    return(
      <div>
        <h2> Podium </h2>
        <List ordered>
          {this.randomRace(this.props.players)}
        </List>
      </div>
    )
  }
}
