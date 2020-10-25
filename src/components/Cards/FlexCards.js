import React, { Component } from 'react';

import styled from 'styled-components';

// React Bootstrap
import { Card, Container, Row, Col } from 'react-bootstrap';

export default class FlexCards extends Component {
  
    render() {
      return (
        <Box>
        <FlexBox>
        <Container>
            <Row>
                <Col md={6}>
                    <Card bg="primary" text="white">
                        <Card.Img variant="top" src="./Images/1.jpg" />
                        <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>
                            Lorem Ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card bg="primary" text="white">
                        <Card.Img variant="top" src="./Images/4.jpg" />
                        <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>
                            Lorem Ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: '10px'}}>
                <Col sm={4}>
                    <Card bg="primary" text="white">
                        <Card.Img variant="top" src="./Images/5.jpg" />
                        <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>
                            Lorem Ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card bg="primary" text="white">
                        <Card.Img variant="top" src="./Images/6.jpg" />
                        <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>
                            Lorem Ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card bg="primary" text="white">
                        <Card.Img variant="top" src="./Images/7.jpg" />
                        <Card.Body>
                        <Card.Title>Lorem Ipsum</Card.Title>
                        <Card.Text>
                            Lorem Ipsum perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        </FlexBox>
        </Box>
      )
    }
  };
  const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;

`;

  const FlexBox = styled.section `
  
  border:0px solid cornflowerblue;
  width:100%;
 
  `;