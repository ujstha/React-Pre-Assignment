import { useNavigate } from 'react-router-dom';

export const MoreDetailButton = ({ id }) => {
	let navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(`/user/${id}`)}
			className='item-detail-btn'
			title='More Detail'
		>
			More Details
		</button>
	);
};
