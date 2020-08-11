import React from 'react';
import './App.css';
import {Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap';
import  CoffeeList from "./Components/CoffeList"

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">Coffee Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <CoffeeList></CoffeeList>
    </div>
  );
}

export default App;
