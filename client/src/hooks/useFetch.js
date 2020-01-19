import React, { useState } from 'react';
import axios from 'axios';

export default function useFetch(){
    
    const [players, setPlayers] = useState([])
    
    const getPlayers = () => {
    axios   
        .get("http://localhost:5000/api/players")
        .then(res => {
            console.log(res.data)
            setPlayers(res.data)
        })
        .catch(err => console.log("ERROR:", err));
    };

    return [players,setPlayers,getPlayers]
}
