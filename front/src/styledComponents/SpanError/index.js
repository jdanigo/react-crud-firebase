import React from "react";
import styled from "styled-components";

export const SpanError = styled.span`
color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: left;
	margin-top: 1rem;
    font-size: 14px;
`;

