import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	font-size: 16px;
	color: white;
	padding-bottom: 16px;
`;

export const Text = styled.p`
	/* font-weight: 700; */
	color: #000000;
	/* font-size: 20px; */
	margin: 0;
`;

export const Button = styled.button`
	padding: 8px 16px;
	color: rgba(0, 0, 0, 0.4);
	font-size: 12px;
	border: 0;
	border-radius: 8px;
	color: white;
	background-color: #1e88e5;
	cursor: pointer;

	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		color: #212121;
		outline: none;
		background-color: #bbdefb;
	}
`;
