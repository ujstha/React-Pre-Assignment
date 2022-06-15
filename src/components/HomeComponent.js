import '../assets/styles/home.css';
import { MoreDetailButton } from './MoreDetailButton';

export const HomeComponent = ({ data }) => {
	return (
		<>
			<div className='row'>
				{data.map((res, index) => (
					<div key={index} className='py-2 col-md-3'>
						<div className='items-center item-box'>
							<span className='items-center item-image-container item-top'>
								<span>{res.name.charAt(0)}</span>
							</span>
							<span className='item-middle'>
								<span className='item-name'>{res.name}</span>
								<span className='item-username'>{`@${res.username}`}</span>
								<a
									href={`https://${res.website}`}
									title={res.website}
									className='item-website'
									target='_blank'
									rel='noreferrer'
								>
									{`https://${res.website}`}
								</a>
							</span>
							<span className='item-bottom'>
								<MoreDetailButton id={res.id} />
							</span>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
