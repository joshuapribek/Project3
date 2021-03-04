import React from 'react';
import {useSelector} from 'react-redux'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Profile = () => {

    const Name = useSelector(state => state.auth.user.user.username)

    console.log(Name)


    return (<>

        <div className="container-fluid center" class="center">
            <Card style={
                {width: '18rem'}
            }>
                <Card.Img variant="top" src="https://via.placeholder.com/150"/>
                <Card.Body>
                    <Card.Title> {Name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


        </div>

    </>)
}
