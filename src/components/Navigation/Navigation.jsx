import { useAuth } from "hooks/useAuth";
import { Link, NavList } from "./Navigation.styled";

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<nav>
			<NavList>
				<li>
					{isLoggedIn ? (
						<Link to="/game">Game</Link>
					) : (
						<Link to="/">Home</Link>
					)}
				</li>
			</NavList>
		</nav>
	);
};
