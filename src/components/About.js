import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NewFilms } from '../shared/ListOfNewFilms';


export default function About() {
  return (
    <Container fluid>
      <div className="d-flex justify-content-center">
        <Card style={{ width: '80vw' }}>
          <Card.Header as="h5" className="d-flex align-items-center">
            <span style={{ marginRight: '20px' }} className="material-icons">movie</span>
            THE FILM
          </Card.Header>
          <Card.Body style={{display:'flex'}}>
          {NewFilms.map((film)=>(
          <Card style={{ width: '18rem' }} key={film.id}>
            <Card.Img variant="top" src={film.img} />
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>{film.title}</Card.Title>
            </Card.Body>
          </Card>
          ))}
          </Card.Body>
            <hr/>
          <Card.Body>
            <Card.Text className="d-flex align-items-center">
              <span style={{ marginRight: '20px' }} className="material-icons">location_on</span>
              Nations
            </Card.Text>
            <hr />
            <Card.Text className="d-flex align-items-center">
              <span style={{ marginRight: '20px' }} className="material-icons">whatshot</span>
              Daily News
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
