import React from 'react';
import { Card } from 'react-bootstrap';

const Station = (props) => {
  return (
    <Card>
      <Card.Header>{props.station.name}</Card.Header>
      <Card.Body>
        {props.station.latitude}, {props.station.longitude}
      </Card.Body>
    </Card>
  );
};

export default Station;
