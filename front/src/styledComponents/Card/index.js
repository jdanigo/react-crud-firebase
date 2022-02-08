import React from 'react';
import styled from "styled-components";

export  const Card = styled.div`
    padding: ${({ padding }) => (padding ? padding : '20px')};
	background: ${({ bg }) => (bg ? bg : '#f0f0f0')};
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 100%;
	display: flex;
	justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : '')};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : '')};
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		padding: 10px;
	}
`;