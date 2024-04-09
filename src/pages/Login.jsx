import { Loader } from "components/Loader/Loader";
import { LoginForm } from "components/LoginForm/LoginForm";
import { useAuth } from "hooks";

const Login = () => {
	const { isLoading } = useAuth();
	return (
		<>
			<title>Login</title>

			{isLoading ? <Loader /> : <LoginForm />}
		</>
	);
};

export default Login;
