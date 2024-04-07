import styled from "styled-components";
import { Form, Field } from "formik";

export const Forma = styled(Form)`
	width: 360px;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 16px;
	font-size: 14px;
`;

export const Input = styled(Field)`
	display: block;
	width: 320px;
	margin-top: 8px;
	padding: 4px 8px;

	border: 0;
	border-bottom: 1px solid #42a5f5;

	outline: none;
`;

export const Button = styled.button`
	padding: 8px 16px;

	color: white;
	border: 0;

	border-radius: 8px;
	text-decoration: none;
	background-color: #1e88e5;
	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		color: #212121;
		outline: none;
		background-color: #bbdefb;
	}
`;
