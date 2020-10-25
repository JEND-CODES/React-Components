import React from "react";
// Shortcuts extension rc-beautify : beautify React -> CTRL + B 

// Router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";

// Homepage component
import Homepage from "./components/Homepage"

// Premier test de composant Todo 
import TodoTest from "./components/TodoTest"

// Deuxième test de component Todo (voir tous les fichiers placés dans le
// dossier /Todo)
import TodoMain from "./components/Todo/TodoMain";

// Chart component
import Chart from "./components/Highcharts/Chart"

// React Bootstrap
// import { Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Form, FormControl, InputGroup, Button, Collapse, Card } from 'react-bootstrap';

// Navbar Component
import NavMenu from "./components/Partials/NavMenu"

// Searchable Table Component
import SearchItems from "./components/Table/SearchItems"

// Slider Component
import Slider from "./components/Carousel/Slider"

// Boostrap Carousel Component
import BootstrapSlider from "./components/Carousel/BootstrapSlider"

// Boostrap Cards Component
import FlexCards from "./components/Cards/FlexCards"

// Boostrap Cards Component
import FadeIn from "./components/Fade/FadeIn"

function App() {

    return (
        
        <div className="App">

            <Router>

              <NavMenu />
              
              <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/TodoTest' component={TodoTest}/>
                <Route path='/TodoMain' component={TodoMain}/>
                <Route path='/Chart' component={Chart}/>
                <Route path='/SearchItems' component={SearchItems}/>
                <Route path='/Slider' component={Slider}/>
                <Route path='/BootstrapSlider' component={BootstrapSlider}/>
                <Route path='/FlexCards' component={FlexCards}/>
                <Route path='/FadeIn' component={FadeIn}/>
              </Switch>
              
            </Router>

        </div>
    );
}

export default App;
