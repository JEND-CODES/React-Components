import React from 'react';

import styled from 'styled-components';

// React Bootstrap
import { Carousel } from 'react-bootstrap';

function BootstrapSlider() {

    return (
        <Slides>
        <Carousel className="bootstrap-slider">
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={window.location.origin + '/Images/25.jpg'}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={window.location.origin + '/Images/23.jpg'}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={window.location.origin + '/Images/26.jpg'}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Slides>
            
    )
}

export default BootstrapSlider;

const Slides = styled.section `
    margin-top:75px;
    padding: 20px;
    border:0px solid cornflowerblue;

    width:100%;
    height:500px;

.d-block {
    width: 100% !important;
    height:500px !important;
}

`;