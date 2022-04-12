import { IUser } from '../types';
import UserCard from './UserCard';

interface IUserList {
	userList: IUser[];
}

const UserList = ({ userList }: IUserList) => {
	return (
		<ul className='row row-cols-2 row-cols-lg-4 g-2 g-lg-3 bg-light my-2'>
			{userList.map((user) => {
				return <UserCard key={user.name} {...user} />;
			})}
		</ul>
	);
};

export default UserList;
