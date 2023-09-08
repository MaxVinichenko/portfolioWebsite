import "./App.css";
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: radial-gradient(#4d4d4d, #1a1a1a);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
`;

export default function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}
