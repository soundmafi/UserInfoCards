import { IAdress } from '../types';

const Adress = ({ city, street, suit, zipcode }: IAdress) => {
	return (
		<div className='px-1'>User Adress:
			<div className="card my-1 px-1 border border-1 bg-light">
				<p>city: {city}</p>
				<p>street: {street}</p>
				<p>suit: {suit}</p>
				<p>zipcode: {zipcode}</p>
			</div>
		</div>
	);
};

export default Adress;
