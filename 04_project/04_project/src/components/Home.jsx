import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ImageContainer = styled.div`
  max-width: 50%;
`;
const ButtonContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
`;

const Home = ({ toggle }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dices.png" alt="" />
      </ImageContainer>
      <ButtonContainer>
        <Button toggle={toggle} />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
