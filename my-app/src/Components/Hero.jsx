import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import MyImage from "../Assets/MyImageDummy.png";

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroContainer = styled.div`
  height: 95vh;
  width: 80%;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const HeroText = styled.h1`
  font-size: 2rem;
  color: white;
  padding: 50px;
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Hero() {
  return (
    <Section>
      <Navbar />
      <HeroContainer>
        <HeroTextContainer>
          <HeroText>Test textTest textTest textTest textTest textTest textTest textTest textTest text</HeroText>
        </HeroTextContainer>

        <ImageContainer>
          <Image src={MyImage} alt="MyImage" />
        </ImageContainer>
      </HeroContainer>
    </Section>
  );
}

export default Hero;
