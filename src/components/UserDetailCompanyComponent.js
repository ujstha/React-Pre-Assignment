export const UserDetailCompanyComponent = ({ isOpen, data }) => {
	return (
		isOpen === 'company' && (
			<>
				<span className='single-item-bottom-company'>
					<span>
						<strong>Name: </strong>
						{data.name}
					</span>
					<span>
						<strong>BS: </strong>
						{data.bs}
					</span>
					<span>
						<strong>Catchphrase: </strong>
						{data.catchPhrase}
					</span>
				</span>
			</>
		)
	);
};
