import Adress from './Adress';
import { IAdress } from './../types';

interface IUserContacts {
	phone: string;
	email: string;
	adress: IAdress;
}

const UserContacts = ({ phone, email, adress }: IUserContacts) => {
	return (
		<div >
			<p className='mx-1'>phone: {phone}</p>
			<p className='mx-1'>email: {email}</p>
			<Adress {...adress} />
		</div>
	);
};

export default UserContacts;
