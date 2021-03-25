import React, {useEffect, useState} from 'react';
import { Button, Container, Row, Col, Image, Jumbotron} from 'react-bootstrap'
import Navigationbar from '../Navbar/Navbar'
import { db } from '../../Configurations'
import { useParams } from "react-router-dom"


function Cart() {
const { id } = useParams();
const [products, setProd] = useState("");
useEffect(()=>{

const docRef = db.collection("Products").doc(id);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setProd(doc.data())
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
})
});

//console.log(products.description);
  return(
    <>
    <Navigationbar />

    <Container style={{marginTop: '20px'}}>
    <Jumbotron>
<h1>Hello, world!</h1>
<p>
  This is a simple hero unit, a simple jumbotron-style component for calling
  extra attention to featured content or information.
</p>
<p>
  <Button variant="primary">Learn more</Button>
</p>
</Jumbotron>

  </Container>
    </>
  );
}

export default Cart;
