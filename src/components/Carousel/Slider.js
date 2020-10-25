import React from 'react';

import styled from 'styled-components';

var images = ["./Images/10.jpg", "./Images/11.jpg","./Images/12.jpg","./Images/13.jpg","./Images/14.jpg","./Images/15.jpg","./Images/16.jpg","./Images/17.jpg","./Images/18.jpg","./Images/19.jpg","./Images/20.jpg","./Images/21.jpg"];

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 5
    }
  }
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 5,
        finish: finish - 5,
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    })
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 5,
        finish: finish + 5
      });
    } else {
      this.setState({
        fadedright: true
      });
    }
    
    this.setState({
      fadedleft: false
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
    const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
    return (
      <MiniSlider>
        <div className="slideshow row col-md-12">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {
            this.state.images.slice(startindex, finishindex).map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="image" alt="illustration" title="illustration" src={image} />
                </div>
              )
            })
           }
          <div className={fadedright} onClick={this.rightClick.bind(this)}></div>
        </div>
      </MiniSlider>
    )
  }
};

const MiniSlider = styled.section `

margin-top: 75px;
border: 0px solid cornflowerblue;
padding: 20px;

.slideshow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    padding: 2em;
    background-color: #ffffff;
    margin: 2em auto;
    border-radius: 10px;
  }
  
  .arrow-left {
    align-self: center;
    height:0;
    width: 2em;
    padding:0;
    margin: 0.5em;
    border-top: 3em solid transparent;
    border-right: 3em solid #3A003A;
    border-bottom: 3em solid transparent;
    cursor: pointer;
  }
  
  .arrow-right {
    align-self: center;
    height:0;
    width: 2em;
    padding:0;
    margin: 0.5em;
    border-top: 3em solid transparent;
    border-left: 3em solid #3A003A;
    border-bottom: 3em solid transparent;
    cursor: pointer;
  }
  
  .faded-left {
    border-right: 3em solid #FFCFFF;
  }
  
  .faded-right {
    border-left: 3em solid #FFCFFF;
  }
  
  @keyframes appear {
    0% {
      opacity: 0.01;
    }
    100% {
      opacity: 1;
    }
  }
  
  .image {
    width: 190px;
    height: 130px;
    object-fit: cover;
    margin: auto 0.1em;
    border-radius: 5px;
    animation: appear 1.5s ease-in;
  }
  
  @media screen and (max-width: 1200px) {
    .slideshow {
      padding-right: 0;
      padding-left: 0;
    }
    .arrow-left {
      border-top: 1.5em solid transparent;
      border-right: 1.5em solid #3A003A;
      border-bottom: 1.5em solid transparent;
    }
    .arrow-right {
      border-top: 1.5em solid transparent;
      border-left: 1.5em solid #3A003A;
      border-bottom: 1.5em solid transparent;
    }
    .image {
      width: 100px;
      height: 70px;
    }
  }
  
  @media screen and (max-width: 630px) {
    .image {
      width: 60px;
      height: 50px;
    }
  }
`;