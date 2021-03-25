import React, {useState} from 'react';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import Navigationbar from '../Navbar/Navbar';
import { Editor } from '@tinymce/tinymce-react';
import { db, storage } from '../../Configurations'

function Addprod() {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [image, setImage] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDesc] = useState("");
   const [progress, setProgress] = useState("");
   const [files, setFiles] = useState("");


console.log(description);

   const addTask = (event) => {
        event.preventDefault();

      function getRandomName(){
          var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
         };
         return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        }

        const imageName = getRandomName()
        const uploadTask = storage.ref(`images/`+imageName).put(files);
                uploadTask.on('state_changed',
                (snapshot) => {
                  const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                  //this.setState({progress});
                  setProgress(progress)
                },
                (error) => {
                  console.log("failed to submit");
                },
              () => {
                storage.ref('images').child(imageName).getDownloadURL().then(url => {
                db.collection('Products').add({
                    name,
                    price,
                    description: description,
                    category,
                    files: url
                })

              })

              })

    }
  return(
    <>
    <Navigationbar />

    <Container style={{marginTop: '20px'}}>
    <Row><Col xl={6}>
    <h3 style={{color: 'white'}}>Add products</h3>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color: 'white'}}>Name:</Form.Label>
    <Form.Control type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter the name of product" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label style={{color: 'white'}}>Example select</Form.Label>
    <Form.Control as="select" onChange={(event) => setCategory(event.target.value)}>
      <option>Category</option>
      <option>Games</option>
      <option>Fun geary</option>
    </Form.Control>
  </Form.Group>


  <Form.Group>
    <Form.File id="exampleFormControlFile1" onChange={(event) => setFiles(event.target.files[0])} label="Select product image" style={{color: 'white'}} />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color: 'white'}}>Price:</Form.Label>
    <Form.Control type="text" onChange={(event) => setPrice(event.target.value)} placeholder="Enter the price of product" />
  </Form.Group>

<Form.Group controlId="formBasicEmail">
<Form.Label style={{color: 'white'}}>Descriptions:</Form.Label>
  <Editor
         initialValue="<p>Type the Descriptions</p>"
         init={{
           height: 200,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         //onEditorChange={this.handleEditorChange}
         onEditorChange={(content, editor) => setDesc(content)}
       />

       </Form.Group>

  <Button variant="primary" type="submit" onClick={addTask}>
    Submit
  </Button>
</Form>

</Col>
</Row>
  </Container>

    </>
  );
}

export default Addprod;
