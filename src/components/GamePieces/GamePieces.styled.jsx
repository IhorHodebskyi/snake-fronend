import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
`;
export const Text = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 32px;
	color: #64b5f6;
`;

export const GameCanvas = styled.canvas`
	background-color: #ecf0f1;
	border: 2px solid #90caf9;
`;
