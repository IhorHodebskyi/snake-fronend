import styled from "styled-components";
import { Form, Field } from "formik";

export const Forma = styled(Form)`
	width: 360px;
	padding: 20px;
	margin: 0 auto;

	background-color: rgba(135, 207, 235, 0.2);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 16px;
`;

export const Input = styled(Field)`
	display: block;
	width: 320px;
	margin-top: 8px;
	padding: 4px 8px;

	border: 0;
	border-radius: 8px;
	background-color: rgba(135, 207, 235, 0.3);
	transition: background-color,
		scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);
	scale: 1;

	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}
`;

export const Button = styled.button`
	padding: 8px 16px;

	color: rgba(0, 0, 0, 0.4);
	font-size: 12px;

	border: 0;
	border-radius: 8px;
	background-color: rgba(135, 207, 235, 0.5);
	cursor: pointer;
	scale: 1;
	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);
	transition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}
`;
