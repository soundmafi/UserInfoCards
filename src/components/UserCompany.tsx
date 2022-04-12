interface IUserCompany {
	company: string;
}

const UserCompany = ({ company }: IUserCompany) => {
	return <p className="mx-1">company: {company}</p>;
};

export default UserCompany;
