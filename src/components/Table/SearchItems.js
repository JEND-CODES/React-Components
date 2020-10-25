import React from 'react';

import styled from 'styled-components';

import SearchTable from './SearchTable';

var libraries = [
    
    { name: 'Vue.js', url: 'https://vuejs.org/', description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png'},
    { name: 'AngularJS', url: 'https://angularjs.org/', description: 'AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/220px-AngularJS_logo.svg.png'},
    { name: 'jQuery', url: 'https://jquery.com/', description: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/220px-JQuery_logo.svg.png'},
    { name: 'Express', url: 'https://expressjs.com/fr/', description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png'},
    { name: 'React', url: 'https://fr.reactjs.org/', description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'},
  
  ];

function SearchItems(){
    return (
        <Box>
            <SearchTable items={libraries} />
        </Box>
    );
}

export default SearchItems;

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;

  a {
      color: blue !important;
  }

  a:hover {
    text-decoration: none;
    color:black !important;
    }

  input {
      margin-left:40%;
      text-align:center;
      width: 200px;
      
      padding:4px;
  }

  @media all and (max-width:700px) {
    input {
        
        margin-left:0;
    }
  }

  table {
      margin: auto;
  }

  td {
      border:1px solid grey;
      padding:10px;
      width:100px !important;
  }

  
`;