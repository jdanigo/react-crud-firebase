import React from 'react';
import styled from "styled-components";


export const Input = styled.input`
	
	padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '10px')};
	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '5px')};
	outline: ${({ outline }) => (outline ? outline : 'none')};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '10px')};
	height: ${({ height }) => (height ? height : '40px')};
    width: ${({ width }) => (width ? width : '100%')};
    border: ${({ border }) => (border ? border : '1px solid #cfcfcf')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
    background: ${({ background }) => (background ? background : '')};
`;