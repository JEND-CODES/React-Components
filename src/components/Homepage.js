import React, { Component } from 'react';

import styled from 'styled-components';

export default class Homepage extends Component {

  render() {
    return (
      <Box>
        <h1>Homepage Dashboard Components</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      </Box>
    );
  }
}

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;
  
`;