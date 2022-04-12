import { IUser } from '../types';
import UserName from './UserName';
import UserContacts from './UserContacts';
import UserCompany from './UserCompany';

const UserCard = ({ name, userName, phone, email, adress, company }: IUser) => {
	return (
		<li className="card my-1 mx-1 border-2 border-dark bg-info">
			<UserName name={name} userName={userName} />
			<UserCompany company={company} />
			
			<UserContacts phone={phone} email={email} adress={adress} />
			
		</li>
	);
};
export default UserCard;
