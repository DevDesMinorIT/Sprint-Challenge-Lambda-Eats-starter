import React from "react";
import { Link, Route} from 'react-router-dom';
import PizzaForm from './PizzaForm'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, 
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const App = () => {
  return (
    <>
      <Navbar color='secondary'>
        <NavbarBrand style={{fontFamily: 'Finger Paint'}}>Lambda Eats</NavbarBrand>
        <Link to='/'>
          <Button color='dark'>Home</Button>
        </Link>
        <Link to='/help'>
          <Button color='danger'>Help</Button>
        </Link>
      </Navbar>
      <Route exact path='/'>
          <Card>
            <CardImg top width='100%' src={require('./Pizza.jpg')} /> 
              <CardText style={{fontFamily: 'Finger Paint', margin: '0 auto', color:'gold', fontSize: '500%', position: 'absolute', left: '30%', top: '50%'}}>Eat While You Code</CardText>
          </Card>
      </Route>
      <Link to='/pizza'>
                <Button  color='success' style={{width: '20%', position: 'absolute', bottom:'33.3%', right: '40%'}} >Order Now</Button>
              </Link>
              <Route path='/pizza'>
                <PizzaForm />
              </Route>
      
    </>
  );
};

export default App;
