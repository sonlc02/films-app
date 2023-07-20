import React from 'react'
import { Films } from '../shared/ListOfFilms'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FilmsDemo() {

  // const notify = () => toast("Book Ticket Success");

  return (<>
    <Carousel>
      <Carousel.Item style={{backgroundColor:'black'}}>
        <img
          className="d-block mx-auto my-auto w-50"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:'black'}}>
        <img
          className="d-block mx-auto my-auto w-50"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:'black'}}>
        <img
          className="d-block mx-auto my-auto w-50"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='row' style={{backgroundImage:'url(https://static.vecteezy.com/system/resources/previews/013/755/473/non_2x/abstract-dark-background-with-line-grid-gradient-color-applicable-website-banner-poster-corporate-social-media-template-billboard-business-sign-video-film-in-channel-backdrop-techno-background-free-vector.jpg)'}}>
      <div style={{paddingLeft:'35px'}} className='text-header'>Phim Nổi Bật</div>
      <div className='container-fluid'>
        {Films.map((film)=>(
           <div className='column' key={film.id}>
           <div style={{backgroundColor:'black', border:'1px solid white'}}
           className='card'
           onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
           onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
           >
           <img src={film.img} alt=''/>
            <h3 className='title'>{film.title}</h3>
            <p className='year'>{film.year}</p>
            <p className='nation'>Nation: {film.nation}</p>
            <div className="d-flex justify-content-center">
            <Button className="d-flex" variant="primary" style={{ marginRight: '30px', marginTop:'30px' }}>Like: {film.like} <i style={{marginLeft: '10px'}} class="material-icons">thumb_up</i></Button>
            <Button className="d-flex" variant="warning" style={{ marginLeft: '30px', marginTop:'30px', color:'#B13131' }}><span style={{marginRight: '10px'}} class="material-icons">star_rate</span>Đánh Giá</Button>
            </div>
            <Link to={`/detail/${film.id}`} style={{color:'white', textDecoration:'none'}}>
              <Button variant="success" style={{marginTop:'30px', marginLeft:'140px'}}>Detail</Button>
            </Link>
              <Button variant="warning" style={{marginTop:'30px', color:'red', fontWeight:'bold', fontSize:'20px'}}>Book Ticket</Button>
        </div>
        </div>
        ))}
    </div>
    </div>
    </>)
}


// import React from 'react'
// import { Films } from '../shared/ListOfFilms'

// export default function FilmsDemo() {
//   return (
//     <div className="films-container">
//     {Films.map((film)=>(
//       <div className="card" key={film.id}>
//         <div className="card-image">
//           <img src={film.img} alt='' />
//         </div>
//         <div className="card-content">
//           <p className="card-title">{film.title}</p>
//           <p className='year'>{film.year}</p>
//           <p className='nation'>Nation: {film.nation}</p>
//         </div>
//           <button style={{marginTop:'30px'}}>Detail</button>
//       </div>
//       ))}
//     </div>
//   )
// }


