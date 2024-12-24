import GameImage from "./GameImage";
import Number from "./Number";
import Score from "./Score";
import styled from "styled-components";
const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  justify-content: space-between;
`;
const Gamepage = () => {
  return (
    <>
      <Main>
        <Score />
        <Number />
      </Main>
      <GameImage />
    </>
  );
};

export default Gamepage;
