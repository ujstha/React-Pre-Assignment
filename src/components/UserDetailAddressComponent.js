export const UserDetailAddressComponent = ({ isOpen, data }) => {
	return (
		isOpen === 'address' && (
			<>
				<span className='single-item-bottom-address'>
					<span>
						<strong>City: </strong>
						{data.city}
					</span>
					<span>
						<strong>Street: </strong>
						{data.street}
					</span>
					<span>
						<strong>Suite: </strong>
						{data.suite}
					</span>
					<span>
						<strong>Zip code: </strong>
						{data.zipcode}
					</span>
				</span>
			</>
		)
	);
};
