import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NewFilms } from '../shared/ListOfNewFilms';

export default function News() {
  return (
    <Container fluid>
      <div className="d-flex">
        <Card style={{ width: '80vw' }}>
          <Card.Header style={{backgroundColor:'black', color:'white'}} as="h5" className="d-flex">
            <span style={{ marginRight: '20px' }} className="material-icons">movie</span>
            THE NEW FILMS
          </Card.Header>
          <Card.Body style={{display:'flex'}}>
          {NewFilms.map((film)=>(
          <Card style={{ width: '18rem' }} key={film.id}>
            <Card.Img variant="top" src={film.img} />
            <Card.Body>
              <Card.Title style={{textAlign:'center', color:'red', fontSize:'22px'}}>{film.title}</Card.Title>
              <Card.Text style={{marginTop:'20px'}} className="d-flex align-items-center">
                <span class="material-icons">calendar_today</span> 
                <b style={{marginLeft:'10px'}}>{film.year}</b> 
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
          </Card.Body>
          <Card.Header style={{marginBottom:'50px',backgroundColor:'black', color:'white'}} as="h5" className="d-flex align-items-center">
          <span style={{ marginRight: '20px' }} className="material-icons">newspaper</span>
            THE NEWS
          </Card.Header>
          <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://images.bauerhosting.com/empire/2023/06/andy-muschietti.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top" rounded />
              <Card.Title>The Flash’s Andy Muschietti Reportedly Directing The Brave And The Bold</Card.Title>
              <Card.Text>His current DC movie, The Flash, hits cinemas next week. But from the sounds of...</Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://images.bauerhosting.com/empire/2023/06/oppenheimer-2.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top" rounded />
              <Card.Title>Christopher Nolan On Visualising Physics In Oppenheimer’s Head: ‘We’ve Gotta See The Atoms Moving’ – Exclusive</Card.Title>
              <Card.Text>Christopher Nolan is no stranger to depicting tricky-to-visualise concepts on...</Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://images.bauerhosting.com/empire/2023/06/bb-head.png?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top" rounded />
              <Card.Title>Blue Beetle Star Xolo Maridueña Is Gearing Up For Sequels And Crossover Movies: ‘We’re Ready For The Whole Nine’ – Exclusive Image</Card.Title>
              <Card.Text>Dating back to the 1930s, Blue Beetle is one of DC’s most venerable...</Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://images.bauerhosting.com/empire/2023/06/cap-4.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top" rounded />
              <Card.Title>Captain America 4 Gets Title Change To Brave New World</Card.Title>
              <Card.Text>With just a single, relaxed, behind-the-scenes pic posted on Instagram by...</Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://images.bauerhosting.com/empire/2023/06/car-head.png?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top" rounded />
              <Card.Title>Hayley Atwell’s Dead Reckoning Character Grace ‘Does Not Belong In A Mission: Impossible Movie’, Says Christopher McQuarrie – Exclusive Image</Card.Title>
              <Card.Text>A mainstay of the MCU as sometime Agent Peggy Carter, Hayley Atwell’s...</Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://files.mastodon.social/cache/preview_cards/images/060/522/173/original/a20b61c14b2da631.jpg" rounded />
              <Card.Title>'Lật mặt 6' đạt gần 250 tỷ đồng sau hai tuần công chiếu</Card.Title>
              <Card.Text>Bộ phim của Lý Hải dẫn đầu doanh thu phòng vé trong hai tuần liên tiếp. Chiều 15/5, "Lật mặt 6" đạt gần 250 tỷ đồng.</Card.Text>
            </Col>
          </Row>
        </Container>
          </Card>       
      </div>
    </Container>
  )
}
