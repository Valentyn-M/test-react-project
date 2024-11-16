import { useUser } from "../../userContext";

const UserMenu = () => {
	const { isLoggedIn, username, logOut, logIn } = useUser();

	return (
		<div>
			{isLoggedIn ? (
				<>
					<p>{username}</p>
					<button onClick={logOut}>Log out</button>
				</>
			) : (
				<button onClick={logIn}>Log in</button>
			)}
		</div>
	);
};

export default UserMenu
