import {useEffect} from 'react';
import axios from 'axios';
import Artistcard from '../artistcard/artistcard'
import React, { useState } from 'react';





export default function Wanderlist() {



const [mydata, setmydata] = useState([]);

  useEffect(()=> {
    //ask user for geo permission
    navigator.geolocation.getCurrentPosition(function(position){
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat,lon)
      axios.get(`/artistsnear/${lat}/${lon}`)
      .then(data => {console.log("hello");
      
      setmydata(data.data) 
      
      })

    })
  },[])
  return (
    <>
    <div>
 {console.log("mydata",mydata)}


{mydata.length ?       mydata.map((data,index) => {



return <Artistcard key={index} name={data.name}  >  </Artistcard> 



}) :null   }







</div>

</>
  );
}

