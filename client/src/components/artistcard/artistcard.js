import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Artistcard(props) {

    return(

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" width="200px" height="300px" src={props.url} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
                {props.locations}
    </Card.Text>
   <a href={props.spotifyurl}> <Button variant="primary">Listen Now</Button> </a>
  </Card.Body>
</Card>

    )
}

export default Artistcard