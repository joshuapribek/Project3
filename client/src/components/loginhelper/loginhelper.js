import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import homelogo from "../../assets/record.png"


export const LoginHelper = () => {

    var geolocation = function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) { // You have your locaton here
                console.log("Latitude: " + pos.coords.latitude + "Longitude: " + pos.coords.longitude);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    return (<>

        <div className="container-fluid" class="">
            <a href="/artistfind"
                onClick={geolocation}>
                <img src={homelogo}
                    alt="Paris"
                    class="shrink center rotate "></img>
            </a>


        </div>

    </>)
}
