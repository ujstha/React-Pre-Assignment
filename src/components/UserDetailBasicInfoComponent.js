export const UserDetailBasicInfoComponent = ({ isOpen, data }) => {
	return (
		isOpen === 'basicinfo' && (
			<>
				<span className='single-item-bottom-basicinfo'>
					<span>
						<strong>Name: </strong>
						{data.name}
					</span>
					<span>
						<strong>Username: </strong>
						{data.username}
					</span>
					<span>
						<strong>Email: </strong>
						<a
							href={`mailto:${data.email}`}
							title={data.email}
							className='basicinfo-email'
						>
							{data.email}
						</a>
					</span>
				</span>
			</>
		)
	);
};
