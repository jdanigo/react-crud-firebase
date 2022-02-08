import React from 'react';
import styled, {keyframes} from "styled-components";


const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  max-width: 100%;
  width: ${({ width }) => (width ? width : '100%')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  padding: 11px 13px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${({ bg }) => (bg ? bg : '#5923b4')};
  color: ${({ color }) => (color ? color : 'white')};
  border: 0;
  border-radius: 10px;
  outline: 0;
  margin: auto;
  display: block;
  position: relative;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ae90ea;
    color: white;
    animation: ${jump} 0.2s ease-out forwards;

  }
`;