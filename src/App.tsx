import userData from './user-data.json';
import { IUser } from './types/index';
import UserList from './components/UserList';
import { phoneFormat } from './js/phoneFormat';

const App = () => {
	const userList: IUser[] = userData.map((user) => ({
		name: user.name,
		userName: user.username,
		phone: phoneFormat(user.phone),
		email: user.email,
		company: user.company.name,
		adress: {
			city: user.address.city,
			street: user.address.street,
			suit: user.address.suite,
			zipcode: user.address.zipcode,
		},
	}));

	return (
		<div className="container">
			<h1 className="title">User Info Cards</h1>
			<UserList userList={userList} />
		</div>
	);
};

export default App;
