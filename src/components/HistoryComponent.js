import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Header from './headerComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class History extends Component {

    state = {
        persons: []
      }

componentDidMount() {
    axios.get(`http://localhost:8000/histories`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        
      });
  }


   render(){
    return (
        <><Header/>
        <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>CIUDAD</th>
          <th>LONGITUD</th>
          <th>LATITUD</th>
          <th>FECHA</th>
        </tr>
      </thead>
      <tbody>
      {
      this.state.persons.map(history =>
              <><tr><td>{history.city}</td><td>{history.length}</td><td>{history.latitude}</td><td>{history.dateTime}</td></tr></>
            )
        }
      </tbody>
      </Table>
        
    </Container></>
    );
  }
}

export default History;

