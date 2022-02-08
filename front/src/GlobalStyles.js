import React from 'react';
import styled, { keyframes, createGlobalStyle } from "styled-components";

function getWidthSpan(span) {
	if(!span) return;
	let width = span / 12 * 100;
	return `width: ${width}%;`
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }

  body, html, #root {
    height: 100%;
	font-family: 'Montserrat', sans-serif;
    font-size: 16px;
	color: #000000;
  }
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
	@media (max-width:400px){
    padding: 0 10px;
	}
	@media (max-width:991px) {
		padding: 0 30px;
	}
	@media (min-width: 1500px) {
		max-width: 1500px;
	}
	@media (min-width: 1800px) {
		max-width: 1800px;
		padding: 0 30px;
	}
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;


export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : 'center')};
	align-items: ${({ align }) => (align ? align : 'center')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-left: ${({ ml }) => (ml ? ml : '')};
	margin-right: ${({ mr }) => (mr ? mr : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : 'wrap')};
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	flex: ${({ span }) => (span ? span : '0 0 auto')};
	${({ xs }) => (xs ? getWidthSpan(xs) : 'width: 100%')}
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '5px')};
	justify-content: ${({ justify }) => (justify ? justify : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-left: ${({ ml }) => (ml ? ml : '')};
	margin-right: ${({ mr }) => (mr ? mr : '')};
	align-items: ${({ align }) => (align ? align : '')};
	

	//Media queries for responsive purposes
	@media only screen and (min-width: 768px){
		${({ sm }) => sm && getWidthSpan(sm)}
	}
	@media only screen and (min-width: 992px){
		${({ md }) => md && getWidthSpan(md)}
	}
	@media only screen and (min-width: 1200px){
		${({ lg }) => lg && getWidthSpan(lg)}
	}
`;