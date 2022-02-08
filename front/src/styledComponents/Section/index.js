import React from 'react';
import styled from "styled-components";


// background: rgb(89,35,180);


export const Section =  styled.section`
	/* display: flex;
	justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : '')};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : '')};
    flex: 1; */
    background: ${({ bg }) => (bg ? bg : '')};
    ${({ bgGrandient }) => (bgGrandient ? 'background: linear-gradient(0deg, rgba(89,35,180,1) 0%, rgba(174,144,234,1) 100%);' : '')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    
`;