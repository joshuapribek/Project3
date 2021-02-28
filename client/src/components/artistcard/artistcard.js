import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './card.css';

const styles = {
  cardstyle: {
    background: "whitesmoke",
    justifyContent: "flex-end",
     width: '18rem', 
     margin: 20
  }
};
function Artistcard(props) {

    return(
      <div className="fade-in">
<Card className="shadow-lg p-3 mb-5 bg-white rounded grow" style={styles.cardstyle}>
  <Card.Img variant="top" width="200px" height="300px"  src={props.url} />
  <Card.Body className="white">
    <Card.Title >{props.name}</Card.Title>
    <Card.Text>
                {props.locations}
    </Card.Text>
   <a target='_blank' href={props.spotifyurl}> <Button variant="btn btn-outline-success">Listen Now</Button> </a>
  </Card.Body>
</Card>
</div>
    )
}

export default Artistcard