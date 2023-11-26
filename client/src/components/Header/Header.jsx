import { Link } from "react-router-dom";
import { PATHS } from "../../utils/routeConstants";
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';

export default function Header() {
    return( 
		<Navbar expand="lg" className="bg-body-tertiary">
		<Container>
		  <Navbar.Brand href="#home"><img src={logo} className={styles.logo}></img></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#link">About</Nav.Link>
			  <Nav.Link href="#link">Cars</Nav.Link>
			  <Nav.Link href="#link">Contacts</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		  <Nav className={styles.logInButton}>
		  	<Nav.Link href="#login">Log In</Nav.Link>
		  </Nav>
		</Container>
	  </Navbar>
	  );
}