import styled from "styled-components";
import 'animate.css';
import { Button } from "@mui/material";

export const WelcomeSection = () => (
  <Container>
    <WelcomeContainer className="animate__animated animate__backInLeft">
      <h1>THE GOURMET SPOT, TU MEJOR OPCIÓN GASTRONÓMICA, SIEMPRE!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quidem quis rerum tenetur dicta reprehenderit, officia quam soluta aspernatur dolores provident non molestias, ipsa nisi libero nulla, nostrum culpa excepturi.</p>
      <ButtonsRedes>
        <Button><img src="../../public/icon-face.png" alt="Facebook" /></Button>
        <Button><img src="../../public/icon-inst.png" alt="Instagram" /></Button>
        <Button><img src="../../public/icon-tiktok.png" alt="TikTok" /></Button>
      </ButtonsRedes>
    </WelcomeContainer>
    <ImageContainer className="animate__animated animate__backInRight">
      <FirstCard>
        <ImagesContainer>
          <StyledImage src="../public/StockCake-Chef Serving Dinner_1722375199.jpg" alt="Chef Serving Dinner" />
        </ImagesContainer>
      </FirstCard>
    </ImageContainer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 82vh;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 600px;
  min-height: 50vh;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  h1 {
    text-align: left;
    margin-bottom: 15px;
    color: #000000;
  }

  p {
    text-align: left;
    font-size: 20px;
    line-height: 1.5;
    color: #000000;
  }

  @media (max-width: 960px) {
    width: 100%;
    height: auto;
    text-align: center;

    h1, p {
      text-align: center;
    }
  }
`;

const ImageContainer = styled.div`
  min-height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
`;

const FirstCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonsRedes = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;

  img {
    width: 50px;
    background-color: transparent;
  }

  @media (max-width: 960px) {
    width: 100%;
    justify-content: space-around;

    img {
      width: 40px;
    }
  }
`;

const StyledImage = styled.img`
  border-radius: 100px;
  width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); 

  @media (max-width: 960px) {
    width: 100%;
    border-radius: 50px;
  }
`;
