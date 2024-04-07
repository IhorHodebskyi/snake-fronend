import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	align-items: center;
	padding: 0;
	/* gap: 8px; */
`;

export const Link = styled(NavLink)`
	padding: 8px 16px;

	color: white;

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

	&.active {
		color: #212121;
		background-color: #bbdefb;
	}
`;
