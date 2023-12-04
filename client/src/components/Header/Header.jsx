import { Link } from "react-router-dom";
import { PATHS } from "../../utils/routeConstants";
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { NavDropdown } from "react-bootstrap";

export default function Header() {
	const { isAuthenticated, username, isAdmin } = useContext(AuthContext);
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
					{isAdmin ? 
					(<Nav.Link as={Link} to={PATHS.ADMINCAR}>Admin Panel</Nav.Link>):
					null
				}
					{!isAuthenticated ?
						(<Nav.Link as={Link} to={PATHS.LOGIN}>Log In</Nav.Link>) :
						(<>
							<NavDropdown title="My Account">
							<NavDropdown.Item>{username}</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={PATHS.MYBOOKINGS}>My Bookings</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link as={Link} to={PATHS.LOGOUT}>Logout</Nav.Link>
						</>
						)
					}
				</Nav>
			</Container>
		</Navbar>
	);
}