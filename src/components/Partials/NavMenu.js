import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

// React Bootstrap
import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../reactLogo.png';

function NavMenu() {

    // Hooks "useState" pour fermer le menu lors du Click sur un Nav.Link
    const [expanded, setExpanded] = useState(false);

    return (
        <Box>
            <Navbar fixed="top" collapseOnSelect expand="lg"  className="custom-navbar" expanded={expanded}>

                <Navbar.Brand>
                    <img src={logo} alt="logo" style={{ width:'45px', filter: 'grayscale(100%)' }}/>
                    <Link to='/' onClick={() => setExpanded(false)}>DASHBOARD</Link>
                </Navbar.Brand>

                <Navbar.Toggle className="hamburger" aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} >
                <span>
                    <i className="fas fa-ellipsis-v"></i>
                </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="multi-links mr-auto">

                        <Nav.Link as={Link} to='/TodoTest' onClick={() => setExpanded(false)}>TodoTest
                        </Nav.Link>

                        <Nav.Link as={Link} to='/TodoMain' onClick={() => setExpanded(false)}>
                            TodoMain
                        </Nav.Link>

                        <Nav.Link as={Link} to='/Chart' onClick={() => setExpanded(false)}>
                            Highcharts
                        </Nav.Link>

                        <Nav.Link as={Link} to='/SearchItems' onClick={() => setExpanded(false)}>
                            Filter-Table
                        </Nav.Link>

                        <Nav.Link as={Link} to='/Slider' onClick={() => setExpanded(false)}>
                            Slider
                        </Nav.Link>

                        <Nav.Link as={Link} to='/BootstrapSlider' onClick={() => setExpanded(false)}>
                            Carousel
                        </Nav.Link>

                        <Nav.Link as={Link} to='/FlexCards' onClick={() => setExpanded(false)}>
                            Cards
                        </Nav.Link>

                        <Nav.Link as={Link} to='/FadeIn' onClick={() => setExpanded(false)}>
                            Scroll-Reveal
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </Box>
    )
}

export default NavMenu;

const Box = styled.section `
    a {
        color: white !important;
    }
    
    a:hover {
        color:black !important;
        text-decoration:none !important;
    }
    
    .custom-navbar { 
        background: cornflowerblue !important;
    }
    .multi-links {
        text-transform: uppercase;
        font-size: 14px;
    }

    .hamburger {
        color:white;
        border:0px solid transparent;
    }
  
`;