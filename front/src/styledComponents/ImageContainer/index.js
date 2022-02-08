import React from "react";
import styled from "styled-components";

export const ImageContainer = styled.img`
    width: ${({ width }) => (width ? width : '200px')};
    display: block;
    margin: ${({ margin }) => (margin ? margin : 'auto')};
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
`;

