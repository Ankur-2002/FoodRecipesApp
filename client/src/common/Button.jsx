import React from 'react';
import styled from 'styled-components';
const Button = props => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

export default Button;

export const ButtonComponent = styled.button`
  font-size: 16px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`;
