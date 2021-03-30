import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import { ArrowRight, Cart, Person } from 'react-bootstrap-icons';
import {Link } from 'react-router-dom'
const Navigationbar = () => {
const products = useSelector(state => state.products)
console.log(products);

  return(
    <>
    <Navbar style={{backgroundColor: '#070720'}}>
    <Container>
      <Navbar.Brand to="/" style={{color: 'white'}}>Game<span style={{color: 'red'}}>Zone</span></Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" style={{color: 'white', padding: '10px'}}>Home</Link>
        <Link href="#" style={{color: 'white', padding: '10px'}}>Categories</Link>
        <Link href="#" style={{color: 'white', padding: '10px'}}>Contact</Link>
      </Nav>
      <Form inline>

        <Link to="/cart" style={{color: 'white'}}><Cart size={40}/>({products.length})</Link>
      </Form>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigationbar
