import {useEffect} from 'react';
import axios from 'axios';
import Artistcard from '../artistcard/artistcard'
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Wanderlist() {


    const [mydata, setmydata] = useState([]);

    useEffect(() => { // ask user for geo permission
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(lat, lon)
            axios.get(`/artistsnear/${lat}/${lon}`).then(data => {
                console.log("hello");

                setmydata(data.data)

            })

        })
    }, [])
    return (
        <>


            <div> {
                console.log("mydata", mydata)
            }
                <Container fluid>
                    <Row> {
                        mydata.length ? mydata.map((data, index) => {


                            return <Col>
                                <Artistcard class="text-center"
                                    key={index}
                                    url={data.image}
                                    name={
                                        data.name
                                    }
                                    locations={
                                        data.location
                                }
                                
                                ></Artistcard>

                            </Col>

                    }) : null
                    } </Row>
                </Container>
            </div>


        </>
    );
}
