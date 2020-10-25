import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const FadeIn = () => {

  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false
  });

  const ourRef = useRef(null),
        anotherRef = useRef(null),
        refThree = useRef(null);

  useLayoutEffect(() => {

    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const div1Pos = topPos(ourRef.current),
          div2Pos = topPos(anotherRef.current),
          div3Pos = topPos(refThree.current);

    const onScroll = () => {

      const scrollPos = window.scrollY + window.innerHeight;

      if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
      } else if (div2Pos < scrollPos) {
        doShow(state => ({ ...state, itemTwo: true }));
      } else if (div3Pos < scrollPos) {
        doShow(state => ({ ...state, itemThree: true }));
      }

    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <Box>
        <p>Scroll down and reveal !</p>
    </Box>
       <Div animate={show.itemThree} ref={refThree}>
          <img src={window.location.origin + '/Images/1.jpg'} alt="illustration" title="illustration" className="img-reveal"/>
       </Div>
       <Div animate={show.itemTwo} ref={anotherRef}>
          <img src={window.location.origin + '/Images/2.jpg'} alt="illustration" title="illustration" className="img-reveal"/>
       </Div>
       <Div animate={show.itemOne} ref={ourRef}>
          <img src={window.location.origin + '/Images/3.jpg'} alt="illustration" title="illustration" className="img-reveal"/>
       </Div>
    </>
  );

};

const Box = styled.section `
  margin-top:75px;
  border: 0px solid cornflowerblue;
  padding: 20px;
  
`;

const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
  height: 900px;
  width: 100%;
  background-color: #dcdcdc;
  border:2px solid black;

  .img-reveal {
    width:100%;
    height:100%;
  }
`;

export default FadeIn;