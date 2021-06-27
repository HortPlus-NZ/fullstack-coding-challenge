import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import Station from './Station';

const Stations = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`api/stations`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      })
      .then((data) => {
        setStations(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>Weather Stations</h3>
        </Col>
      </Row>
      {loading ? (
        <Spinner animation='border' variant='primary' />
      ) : stations.map((station) => (
        <Row key={station.id} className='my-3'>
          <Col>
            <Station station={station} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Stations;

if (document.getElementById('root')) {
  ReactDOM.render(<Stations />, document.getElementById('root'));
}
