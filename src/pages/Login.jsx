import { Loader } from "components/Loader/Loader";
import { LoginForm } from "components/LoginForm/LoginForm";
import { useAuth } from "hooks";

const Login = () => {
	const { isLoading } = useAuth();
	return (
		<>
			<title>Login</title>
			<LoginForm />
			{isLoading && <Loader />}
		</>
	);
};

export default Login;
