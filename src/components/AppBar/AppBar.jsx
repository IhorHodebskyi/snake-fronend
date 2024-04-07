import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import { Container, Header } from "./AppBar.styled";

export const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Container>
			<Header>
				<Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</Header>
		</Container>
	);
};
