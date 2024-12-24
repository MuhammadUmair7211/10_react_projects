import styled from "styled-components";
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
  }
`;
const Score = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default Score;
