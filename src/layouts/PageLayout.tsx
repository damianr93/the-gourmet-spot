import styled from "styled-components";
import { WelcomeSection } from "../components/WelcomeSection";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/Footer";
import Products from "../components/Products";
import ContactUs from "../components/Contact";
import { Route, Routes } from "react-router-dom";

export const PageLayout = () => {
  return (
    <Container>
      <NavBar />

      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="products" element={<Products />} />

        <Route path="contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;
