import styled from "styled-components";
import { WelcomeSection } from "../components/WelcomeSection";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/Footer";
import Products from "../components/Products";
import ContactUs from "../components/Contact";

export const PageLayout = () => {
  return (
    <Container>
      <NavBar />
      <WelcomeSection/>
      <Products />
      <ContactUs/>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;
