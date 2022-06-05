import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  border: 1px solid black;
  width: 15rem;
  height: 17rem;
`;
const Top = styled.div`
  height: 60%;
  background: blue;
`;
const Bottom = styled.div`
  height: 40%;
  background: green;
`;
