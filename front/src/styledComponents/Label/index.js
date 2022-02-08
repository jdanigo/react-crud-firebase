import React from 'react';
import styled from "styled-components";


export const Label =  styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: ${({ color }) => (color ? color : '#000000')};
`;