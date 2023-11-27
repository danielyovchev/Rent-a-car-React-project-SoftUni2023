import { Link } from "react-router-dom";
import { PATHS } from "../../utils/routeConstants";
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';

export default function Header() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as={Link} to={PATHS.HOME}><img src={logo} className={styles.logo}></img></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to={PATHS.HOME}>Home</Nav.Link>
						<Nav.Link as={Link} to={PATHS.ABOUT}>About</Nav.Link>
						<Nav.Link as={Link} to={PATHS.CARS}>Cars</Nav.Link>
						<Nav.Link as={Link} to={PATHS.CONTACTS}>Contacts</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Nav className={styles.logInButton}>
					<Nav.Link as={Link} to={PATHS.LOGIN}>Log In</Nav.Link>
					<Nav.Link as={Link} to={PATHS.LOGOUT}>Logout</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}