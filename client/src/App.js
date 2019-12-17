import React from 'react';
import axios from 'axios';
import useDarkMode from './darkmode';
import DarkModeButton from './darkModeButton';


class App extends React.Component {
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

    const submitHandler = e => {
      e.preventDefault(); //prevents the page from refreshing
      console.log("Dark Mode button was clicked");
    };


    
    return(
      
      <div>

      <DarkModeButton />
      
     
      {this.state.playerData.map( player=>{
        
        return  (    
        
          <div> 
    
            <div className="player-info">
              <h3 className="player-name">{player.name}</h3>
              <p className="player-country"> {player.country}</p>
              <p className="player-searches"> {player.searches}</p>
            </div>
          </div>
      )})}
      
      </div>
    )
  }  

}

export default App;

