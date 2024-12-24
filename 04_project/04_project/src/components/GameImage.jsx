import React from "react";
import styled from "styled-components";
const Body = styled.div`
  max-width: 1280px;
  text-align: center;
  margin: 0 auto;
  img {
    width: 230px;
  }
`;
const GameImage = () => {
  return (
    <Body>
      <img src="/images/game-icon.png" alt="" />
    </Body>
  );
};

export default GameImage;
