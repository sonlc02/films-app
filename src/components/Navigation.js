import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Navigation = (props) => {
  
  const { theme, toggle, dark } = useContext(ThemeContext)

  return (<>
    <Navbar style={{ backgroundColor: theme.backgroundColor, color: theme.color, display: 'flex', justifyContent: 'space-between'}} expand="lg">
    <Link style={{color:'white', textDecoration:'none'}} to="/"><Navbar.Brand style={{ backgroundColor: '#EFA25E', color: 'white', padding: '10px 10px', borderRadius: '5px' }} href="#home">HOME</Navbar.Brand></Link>
        <Navbar.Toggle style={{color: theme.color, background:'white'}}  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link style={{textDecoration:'none'}} to="/news"><Nav.Link style={{color: theme.color}} href="#news">News</Nav.Link></Link>
          <Link style={{textDecoration:'none'}} to="/about"><Nav.Link style={{color: theme.color}} href="#about">About</Nav.Link></Link>
          <Link style={{textDecoration:'none'}} to="/contact"><Nav.Link style={{color: theme.color}} href="#contact">Contact</Nav.Link></Link>
          </Nav>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#switch' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none',
            paddingRight:'30px',
            textDecoration: 'none'
          }} data-testid="toggle-theme-btn">
          <i style={{color: theme.color, fontSize:'30px'}} class="bi bi-arrow-repeat"></i> {!dark}  
         </a>
         {/* <div id='Color-switcher' onClick={() => theme(!dark)}>
                <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
              </div> */}
         </div>
        </Navbar.Collapse>
    </Navbar>
  </>);
}

export default Navigation;