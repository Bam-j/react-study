import React from 'react';
import styled, {css} from 'styled-components';

const Text = styled.div`
  font-size: medium;
  
  @media (max-width: 768px) {
    font-size: x-small;
  }
  @media (max-width: 1024px) {
    font-size: small;
  }
`;

const Button = styled.button`
  background: #c4c4c4;
  color: #000;
  align-items: center;

  &:hover {
    background: #282c34;
    color: #61dafb;
  }
`;