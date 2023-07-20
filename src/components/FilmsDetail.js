import React from 'react'
import { Films } from '../shared/ListOfFilms'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import ReactPlayer from 'react-player';


export default function FilmsDetail() {

    const [film, setFilms] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const userTitle = useParams();
    const filmData = Films.find(obj => {
    return obj.id == userTitle.id;
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor:'#F0FFFF'}}>
    <div style={{ flex: '0 0 30%', marginRight: '1rem' }}>
      <Card.Img variant="top" src={`../${filmData.img}`} alt='' />
    </div>
    <div style={{ flex: '1'}}>
      <Card.Body style={{border:'1px solid black', boxShadow:'5px 10px', borderRadius:'10px', marginRight:'15px', position:'relative', paddingBottom:'100px'}}>
        <Card.Title 
            style={{
                fontSize:'50px',
                fontWeight:'bold',
                color:'red',
                textAlign:'center'
                
            }}>
                {filmData.title}
        </Card.Title>
        <hr/>
        <Card.Text style={{fontSize:'25px', paddingLeft:'10px'}}>
            <p><b>Director:</b> {filmData.director}</p>
            <p><b>Peformer:</b>  {filmData.performer}</p>
            <p><b>Category:</b>  {filmData.category}</p>
            <p><b>Time:</b>  {filmData.time}</p>
            <p style={{fontWeight:'bold'}}>Rated: {filmData.rated}</p>
            <p><b>Description:</b> {filmData.description}</p>
        </Card.Text>
        <Button onClick={() => {
        setFilms(film);
        setShowPopup(true);
        setIsPlaying(true);
      }}
      style={{marginTop:'10px', padding:'0px 15px',marginBottom:'20px',position: 'absolute', bottom:'0'}} variant="success" >
        <a style={{color:'white', textDecoration:'none', fontSize:'20px'}} href='#popup1' id='openPopUp'>
          Trailer Film <br/>
        <span style={{paddingTop:'15px'}}class="material-icons">ondemand_video</span>
        </a>
      </Button>
      </Card.Body> 
    </div>
    {showPopup && (
    <div id='popup1' className='overlay'>
        <div className='popup'>
        <a className='close' href='#close' onClick={() => {
           setShowPopup(false);
           setIsPlaying(false);
        }}>&times;</a>
            <h2>{filmData.titleVideo}</h2>
            <ReactPlayer style={{marginTop:'10px',position:'relative', display:'flex', width:'100%'}}    
            playing={isPlaying}  
            onEnded={() => setIsPlaying(false)}     
            url={filmData.video}
            className="embed-responsive-item"
            controls
        />
        </div>
    </div>
    )}
  </div>  
  )
}
