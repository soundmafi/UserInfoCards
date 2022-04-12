interface IUserName {
	name: string;
	userName: string;
}

const UserName = ({ name, userName }: IUserName) => {
	return (
		<div className="card m-1 px-1 border border-1">
			<p>name: {name}</p>
			<p>username: {userName}</p>
		</div>
	);
};

export default UserName;
