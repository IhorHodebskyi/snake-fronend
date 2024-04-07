import { Link, NavList } from "./AuthNav.styled";

export const AuthNav = () => {
	return (
		<NavList>
			<li>
				<Link to="/register">Sign Up</Link>
			</li>
			<li>
				<Link to="/login">Log In</Link>
			</li>
		</NavList>
	);
};
