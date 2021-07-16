import {React, useContext} from 'react';
import "../css/App.css";
import logo from '../images/logo.jpeg';
import moviezzContext from '../context/moviezzContext';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import { FcSearch } from 'react-icons/fc';
import {Nav,Form, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';




const Header = () => {
    const { headerButtonText, headerButtonLink } = useContext(moviezzContext) 
    return (
    <header>

  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt="Moviezz Logo" width="100" height="30" className="d-inline-block align-center"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">MyMoviezz</Nav.Link>
      <Nav.Link href="/tvlist">TV Shows</Nav.Link>
      <Nav.Link href="/movielist">Movies</Nav.Link>
      

    </Nav>
    <Form>
    <Link to= {"" + headerButtonLink + ""}>
      <Button variant="outline-success">{headerButtonText}</Button>
     
            </Link>
            &nbsp;
            <FcSearch  size={40}/>
            
    </Form>
  </Navbar.Collapse>
</Navbar>
    </header>
    )
}

export default Header
