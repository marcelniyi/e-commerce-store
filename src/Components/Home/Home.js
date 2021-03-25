import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Badge, Carousel} from 'react-bootstrap';
import Navigationbar from '../Navbar/Navbar'
import { db } from '../../Configurations'
import Spinner from 'react-spinkit'
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
      src="https://inyarwanda.com/app/webroot/img/202103/images/phio-6574471615444192.jpg"
      alt="First slide"
      style={{height: '400px'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://inyarwanda.com/app/webroot/img/202103/images/supr0-949031615396171.jpg"
      alt="Second slide"
      style={{height: '400px'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://inyarwanda.com/app/webroot/img/202103/images/1302502781-4241671615442993.jpg"
      alt="Third slide"
      style={{height: '400px'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    <Row style={{marginTop: '40px'}}>
    {!products?
      <Spinner name="pacman" color="red" style={{marginLeft: '600px'}}/>
      :
    <>
    {products && products.map(product => (
      <Col key={product.id}>
      <Card style={{ width: '18rem', backgroundColor: '#343A40', border: '1px solid #343A40' }}>
        <a href={`/details/${product.id}`}>
        <Card.Img variant="top" height="300px" src={product.image} />
        </a>
          <div style={{display: 'inline', marginTop: '30px'}}>
          <Badge variant="secondary" style={{width:'50px'}}>Game</Badge>
          <Badge variant="secondary" style={{width:'50px', marginLeft: '10px'}}>{product.category}</Badge>
          <span style={{color: 'white', marginLeft: '20px'}}>{product.price} Rwf</span>
          </div>

          <a href="/details"><Card.Text style={{marginTop: '10px', color: 'white'}}>
            {product.title}
          </Card.Text>
          </a>
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
    </>
  );
}

export default Home;
