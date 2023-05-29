import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MapContainer from './MapContainerComponent'
import React, { Component, useState, useRef  } from "react"
import Iframe from 'react-iframe'
import axios from "axios";

function FormSearchCity(){
    const [coordinates, setCoordinates] = useState("coordinate")
    const [nameCity, setNameCity] = useState("nameCity")
    const [humedad, setHumedad] = useState("humedad")

    //nameCity = 'London'
    const iframeRef = useRef()
    let la = 'Orlando'
    let url =  "https://www.google.com/maps/embed/v1/place?q="+nameCity+'&key=AIzaSyCrzD70aVOW6ZdDhbwrmM7HMHTnzdKZxcE'
    
    const handleSubmit = event => {
        event.preventDefault();
        //const user = {coordinate: coordinates}
        let long = ''
        let lati = ''
        let cadena = coordinates.split(',')

        long = cadena[1]
        lati = cadena[0]

        const token = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

        axios.post('http://localhost:8000/map', { latitud: lati, longitud: long},{
        
            headers: {
            'content-type': 'text/json',
            'X-CSRF-TOKEN': token
            }
        }
        )
          
        
        .then(res=>{
            la= res.data.name
            iframeRef.current.src += ''
            setNameCity(la)
            setHumedad(res.data.main.humidity)
            
          })
      }

    const handleChange = event => {
        setCoordinates(event.target.value)
    }

    return (
    <div>
    <Container>
    <Form onSubmit ={ handleSubmit }>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Ciudad
        </Form.Label>
        <Col sm="6">
        <Form.Select value={coordinates} onChange={handleChange} aria-label="Default select example">
            <option >-- Seleccione -- </option>
            <option value="25.77427,-80.19366">Miami</option>
            <option value="28.538336,-81.379234">Orlando</option>
            <option value="40.71427,-74.00597">New York</option>
        </Form.Select>
        </Col>
        <Col sm="4">
        <Button variant="primary" type="submit">
            Buscar
        </Button>
        </Col>
      </Form.Group>
    </Form>
    
    </Container>

    <Container>
    <Row>
        <Col>
            <iframe ref={iframeRef} src={url} height="520" width="600"></iframe>
        </Col>
        <Col>
            <h4>Humedad</h4>
            <p>{ humedad }</p>
        </Col>
    </Row>

    </Container>
</div>
);
}

export default FormSearchCity;