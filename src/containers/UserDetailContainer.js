import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserDetailComponent } from '../components/UserDetailComponent';

export const UserDetailContainer = () => {
	let { id } = useParams();
	const [user, setUser] = useState(() => {});

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				setUser(res.data);
			});
	}, [id]);

	return (
		<>
			<UserDetailComponent data={user} />
		</>
	);
};
