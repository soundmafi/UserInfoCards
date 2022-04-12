export interface IUser {
	name: string;
	userName: string;
	phone: string;
	email: string;
	adress: {
		city: string;
		street: string;
		suit: string;
		zipcode: string;
	};
	company: string;
}

export interface IAdress {
	city: string;
	street: string;
	suit: string;
	zipcode: string;
}
