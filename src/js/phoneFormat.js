export const phoneFormat = (phone) => {
	const spaceIndex = phone.indexOf(' ');
	if (spaceIndex >= 0) {
		phone = phone.slice(0, spaceIndex);
	}

	phone = phone.split('').filter((elementPhone) => +elementPhone);
	phone.splice(3, 0, ')');
	phone.splice(0, 0, '(');

	return phone.join('');
};
