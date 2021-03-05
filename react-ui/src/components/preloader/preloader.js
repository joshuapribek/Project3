import React from "react";
import holy from '../../assets/preload.gif'



function Preloader() {

    window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }

    return ( 


<div className="preloader"><img className="preloader-icon" src={holy} alt="My Site Preloader"></img></div>





    )

}

export default Preloader