import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import { ArrowRight, Cart, Person } from 'react-bootstrap-icons';

var style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    backgroundColor: '#070720',
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer(){
    return (
        <div>

            <Navbar style={style}>
            <Container>
              <Navbar.Brand href="/" style={{color: 'white'}}>Game<span style={{color: 'red'}}>Zone</span></Navbar.Brand>
              <Nav className="mr-right">
                <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
                <Nav.Link href="#" style={{color: 'white'}}>Categories</Nav.Link>
                <Nav.Link href="#" style={{color: 'white'}}>Contact</Nav.Link>
              </Nav>
              </Container>
            </Navbar>

        </div>
    )
}

export default Footer
