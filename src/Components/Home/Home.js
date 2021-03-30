import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Badge, Carousel} from 'react-bootstrap';
import Navigationbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { db } from '../../Configurations'
import Spinner from 'react-spinkit'
import {Link } from 'react-router-dom'

function Home() {
const [products, setProd] = useState("");
  useEffect(()=>{
  db.collection('Products')
    .onSnapshot(snapshot =>
        setProd(snapshot.docs.map(doc => (
         { id: doc.id, title : doc.data().name , category: doc.data().category, price :
            doc.data().price, image: doc.data().files })))
      )} ,[]);


  return(
    <>
    <Navigationbar />

    <Container style={{marginTop: '20px'}}>


    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/maxradio-73510.appspot.com/o/images%2Fbd9c5672-8d7f-3b6b-eb27-fdfc4b1ae7fe?alt=media&token=80f6a27c-3e55-4e00-9abb-780a92be6f19"
      alt="First slide"
      style={{height: '400px'}}
    />
    <Carousel.Caption>
      <h3>Far cry 5</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/maxradio-73510.appspot.com/o/images%2Fe352ec45-87c1-b411-7506-c9baa4de934c?alt=media&token=2005339c-f844-4b85-9e16-a294f2ad08e5"
      alt="Second slide"
      style={{height: '400px'}}
    />

    <Carousel.Caption>
      <h3>Assassins creed</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/maxradio-73510.appspot.com/o/images%2F4a3440c5-4e8c-e868-8f54-292171e4ea53?alt=media&token=8c6f391d-348d-4514-aa9b-33493ce1fc37"
      alt="Third slide"
      style={{height: '400px'}}
    />

    <Carousel.Caption>
      <h3>GTA Vice City</h3>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    <Row style={{marginTop: '40px'}}>
    {!products?
      <Spinner name="ball-pulse-sync" color="red" style={{marginLeft: '600px'}}/>
      :
    <>
    {products && products.map(product => (
      <Col key={product.id} style={{paddingBottom: '20px'}}>
      <Card style={{ width: '18rem', backgroundColor: '#343A40', border: '1px solid #343A40' }}>
        <Link to={`/details/${product.id}`}>
        <Card.Img variant="top" height="300px" src={product.image} />
        </Link>
          <div style={{display: 'inline', marginTop: '30px'}}>
          <Badge variant="secondary" style={{width:'50px'}}>Game</Badge>
          <Badge variant="secondary" style={{width:'50px', marginLeft: '10px'}}>{product.category}</Badge>
          <span style={{color: 'white', marginLeft: '20px'}}>{product.price} Rwf</span>
          </div>

          <Link to={`/details/${product.id}`}><Card.Text style={{marginTop: '10px', color: 'white'}}>
            {product.title}
          </Card.Text>
          </Link>
        </Card>
      </Col>
      ))}
</>
}


      <Col>

      </Col>
      <Col>

      </Col>
    </Row>
  </Container>
  <Footer />
    </>
  );
}

export default Home;
