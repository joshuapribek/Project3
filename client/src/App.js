import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
import Artistcard from './components/artistcard/artistcard'
import React, { useState } from 'react';


function App() {
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

export default App;
