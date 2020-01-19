import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

export default function Players() {
    const [players,setPlayers,getPlayers] = useFetch();

    useEffect( () =>  {   
        getPlayers();
    },[]);


    console.log(players)
    return (
        <div>
            { players.map((player) =>{
                return (
                    <div>
                        <h1>{player.name}</h1>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                    </div>
                )
            })}



        </div>
    )
}


