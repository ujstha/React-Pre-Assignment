import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeComponent } from '../components/HomeComponent';

export const HomeContainer = () => {
	const [users, setUsers] = useState(() => []);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => setUsers(res.data));
	}, []);

	return (
		<>
			<HomeComponent data={users} />
		</>
	);
};
