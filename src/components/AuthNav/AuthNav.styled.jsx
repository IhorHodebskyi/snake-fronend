import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 8px;

	list-style: none;
`;

export const Link = styled(NavLink)`
	padding: 8px 16px;

	font-size: 18px;
	color: white;

	border-radius: 8px;
	text-decoration: none;
	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);
	background-color: #1e88e5;

	&:hover,
	&:focus {
		color: #212121;
		outline: none;
		background-color: #bbdefb;
	}

	&.active {
		color: #212121;
		background-color: #bbdefb;
	}
`;
