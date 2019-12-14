import React from 'react';
import axios from 'axios';


class PlayerData extends React.Component {
  constructor() {
    super();

    this.state = {
      playerData: []
    }
    console.log(this.state);
  }
  
  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({
        playerData: response.data
    })
      console.log(response.data)
      console.log(this.state)
    })
      .catch(error => {
        console.error(error)
      })
  }

  render(){
    return(
      this.state.playerData.map( (player)=>{
        
        return  (        
          <div className="player-info">
            <h3 className="player-name">{player.name}</h3>
            <p className="player-country"> {player.country}</p>
            <p className="player-searches"> {player.searches}</p>
          </div>
      )})
    )
}  
  // render(){
  //   return(
  //     this.state.playerData.map( (player)=>{
        
  //       return  (        
  //         <div className="player-info">
  //           <h3 className="player-name">{player.name}</h3>
  //           <p className="player-country"> {player.country}</p>
  //         </div>
  //   ) 
  // }
}

export default PlayerData;

