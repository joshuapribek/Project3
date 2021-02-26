import {useEffect} from 'react';
import axios from 'axios';
import Artistcard from '../artistcard/artistcard'
import React, { useState } from 'react';


export const Wanderlist = () => {
  useEffect(()=> {
    //ask user for geo permission
    navigator.geolocation.getCurrentPosition(function(position){
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat,lon)
      axios.get(`/artistsnear/${lat}/${lon}`)
      .then(data => console.log(data))

    })
  },)
  return (
    <div>
<Artistcard></Artistcard>

<Artistcard></Artistcard>

<Artistcard></Artistcard>


<Artistcard></Artistcard>


<Artistcard></Artistcard>





</div>
  );
}

