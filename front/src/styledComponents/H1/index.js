import React from 'react';
import styled from "styled-components";


export const H1 = styled.h1`
	font-size: 2.5rem;
    color: ${({ color }) => (color ? color : '')};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
    margin: ${({ margin }) => (margin ? margin : '10px')};
`;