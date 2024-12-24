import styled from "styled-components";

const Heading = styled.h1`
  font-size: 96px;
  font-weight: 700;
`;
const Start = styled.button`
  padding: 18px 10px;
  background-color: #000;
  color: white;
  cursor: pointer;
  border: none;
  width: 220px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;
const Button = ({ toggle }) => {
  return (
    <>
      <Heading>DICE GAME</Heading>
      <Start onClick={toggle}>Play Now</Start>
    </>
  );
};

export default Button;
