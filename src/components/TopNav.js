import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class TopNav extends Component {
	render() {
		return (
			<div id="TopNavDiv">
			<Navbar inverse collapseOnSelect>
			<Navbar.Header>
      			<Navbar.Brand>
        			<a href="#" id="brandlogo">EnergyLoganSale</a>
			    </Navbar.Brand>
			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
			    <Nav pullRight>
			    	<NavItem className="navlist" eventKey={1} href="#">Resource</NavItem>
			      	<NavItem className="navlist" eventKey={2} href="#">Account</NavItem>
			       	<NavItem className="navlist" eventKey={3} href="#">Logout</NavItem>
			    </Nav>
	        </Navbar.Collapse>
			</Navbar>
			</div>				
		)
	}
}

export default TopNav;