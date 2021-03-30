import React, {useEffect, useState} from 'react'
import { Button, Container, Row, Col, Image, Table, Jumbotron} from 'react-bootstrap'
import Navigationbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import PaypalBtn from 'react-paypal-checkout';



function Cart() {
const cart = useSelector(state => state.products)
const dispatch = useDispatch()
const client = {
            sandbox:    'YOUR-SANDBOX-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

const deleteProduct = (id) => {
       dispatch({
            type: 'REMOVE_PRODUCTS',
            payload: id
        })
   }
console.log(cart);
let data = []
let total = 0
Object.keys(cart).map((item, i) => {
  let key = i+1
  total = total+parseInt(cart[item].price)
  data.push(<tr>
    <td>{key}</td>
    <td>{cart[item].name}</td>
    <td>{cart[item].price}</td>
    <td> <button onClick={() => {deleteProduct(cart[item].id)}}>x</button> </td>
  </tr>)
})


  return(
    <>
    <Navigationbar />

    <Container style={{marginTop: '20px'}}>
    <Jumbotron>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price in ( $ )</th>
          <th></th>
        </tr>
      </thead>
      <tbody>

      {data}
      </tbody>
    </Table>
    <p>Total: {total} $</p>
    <PaypalBtn client={client} currency={'USD'} total={1.00} />
</Jumbotron>

  </Container>
    </>
  );
}

export default Cart;
