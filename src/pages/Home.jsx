import { Wrapper, Title } from "./Home.styled";

const Home = () => {
	return (
		<>
			<Wrapper>
				<Title>Welcome to Game!</Title>{" "}
				<Title>
					To start playing, go through the registration
					process or log in with your email and password.
				</Title>{" "}
			</Wrapper>
		</>
	);
};

export default Home;
