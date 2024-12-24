import styled from "styled-components";
const Select = styled.div`
  max-width: 552px;
  padding: 0.5rem 1rem;
  gap: 10px;
  div {
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
const Row1 = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Row2 = styled.div`
  p {
    font-size: 24px;
    text-align: end;
    margin-top: 1rem;
    font-weight: 700;
  }
`;
const Number = () => {
  return (
    <Select>
      <Row1>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </Row1>
      <Row2>
        <p>Select Number</p>
      </Row2>
    </Select>
  );
};

export default Number;
