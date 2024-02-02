import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";
const ErrorScreen = () => {
  useTitle('Not Found')
  return <Wrapper>
    <h3>Pagina non trovata</h3>
    {/* <Lottie 
    options={{
      loop: true,
      autoplay: true,
      reverse: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio : 'XMidYMid slice'
      },
    }} 
    width={500}
    height={500}
    /> */}
    <Link to='/' className="btn btn-primary">
      Torna in home
    </Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --web-kit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
