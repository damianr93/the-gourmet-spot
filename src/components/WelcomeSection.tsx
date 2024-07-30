import styled from "styled-components";
import 'animate.css';


export const WelcomeSection = () => (
  <Container>
    <WelcomeContainer className="animate__animated animate__backInLeft">
      <h1>THE GOURMET SPOT, TU MEJOR OPCIÓN GASTRONÓMICA, SIEMPRE!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quidem quis rerum tenetur dicta reprehenderit, officia quam soluta aspernatur dolores provident non molestias, ipsa nisi libero nulla, nostrum culpa excepturi.</p>
    </WelcomeContainer>
    <ImageContainer className="animate__animated animate__backInRight">
      <FirstCard>
        <ImagesContainer>
          <img src="../public/StockCake-Chef Serving Dinner_1722375199.jpg" alt="" />
        </ImagesContainer>
      </FirstCard>
    </ImageContainer>
  </Container>

);

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 75vh;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #ffffff;
  width: 600px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  h1 {
    text-align: left;
    margin-bottom: 15px;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    color: #ffffff;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ImagesContainer = styled.div`
  display: flex;
  border-radius: 50%;

  img {
    border-radius: 100px;
    width: 300px;
  }
`

const FirstCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
