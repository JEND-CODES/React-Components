import React, { Component } from 'react';

import styled from 'styled-components';

// Todo Test minimal Component
export default class TodoTest extends Component {
    constructor() {
        super()

        this.state = {
            item: '',
            items: [],
            isShowBody: true,
            active: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitItem = this.submitItem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
        
      }

    handleInputChange(event) {
        let name = event.target.name
        let value = event.target.value

        this.setState({ [name] : value })
    }

    submitItem() {
        let items = this.state.items
        let item = this.state.item

        items.push(item)

        this.setState({ items: items })
        
    }

    handleSubmit(e){
      e.preventDefault();
      e.target.reset();
    }

    handleClick() {
      this.setState({isShowBody: !this.state.isShowBody})
    }

    toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  render() {
    return (
        <Box>
            <h3>Todo Test Component</h3>

            <p onClick={this.handleClick}>Hide Results</p>

            {this.state.isShowBody ? 
                    <p>
                        This is the Body of the chat
                    </p>
                : null}

            <form onSubmit={this.handleSubmit}>
                <textarea name="item" onChange={this.handleInputChange}></textarea>
                <button onClick={this.submitItem}>Ajouter</button>
            </form>

            {this.state.items.map((item, index) => {
                return(
                   <p id={index} key={index} className={this.state.active ? 'your_className': null} onClick={this.toggleClass}>{item}</p> 
                )
            })}
        </Box>
    )
  }
}

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;
  text-align:center;

  .your_className {
      opacity:0.5;
  }
  
`;