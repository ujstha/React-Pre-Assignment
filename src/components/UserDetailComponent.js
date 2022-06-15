import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/userdetail.css';
import { MenuLinkButton } from './MenuLinkButton';
import { UserDetailAddressComponent } from './UserDetailAddressComponent';
import { UserDetailBasicInfoComponent } from './UserDetailBasicInfoComponent';
import { UserDetailCompanyComponent } from './UserDetailCompanyComponent';

export const UserDetailComponent = ({ data }) => {
	const [isOpen, setIsOpen] = useState(() => 'basicinfo');
	const [nextClick, setNextClick] = useState(() => '');
	const [prevClick, setPrevClick] = useState(() => '');

	const toggleMenu = (val) => {
		setIsOpen(val);
	};
	let navigate = useNavigate();

	useEffect(() => {
		if (data && data.id > 1) {
			setPrevClick('clickable');
		} else {
			setPrevClick('');
		}
		if (data && data.id < 10) {
			setNextClick('clickable');
		} else {
			setNextClick('');
		}
	}, [data]);

	const nextBtn = (id) => {
		if (id < 10) {
			navigate(`/user/${data.id + 1}`);
		}
	};

	const prevBtn = (id) => {
		if (id > 1) {
			navigate(`/user/${data.id - 1}`);
		}
	};

	return (
		data &&
		data.length !== 0 && (
			<>
				<div className='items-center row'>
					<div className='mt-3 col-md-5'>
						<div className='single-item-box'>
							<div className='items-center page-detail-box'>User Details</div>
							<span className='items-center single-item-top'>
								<span className='items-center single-item-image-container'>
									<span>{data.name.charAt(0)}</span>
								</span>
							</span>

							<span className='single-item-middle'>
								<span className='single-item-username'>{`@${data.username}`}</span>
								<span className='single-item-name'>{data.name}</span>
								<a
									href={`https://${data.website}`}
									title={data.website}
									className='single-item-website'
									target='_blank'
									rel='noreferrer'
								>
									{`https://${data.website}`}
								</a>
							</span>

							<span className='single-item-bottom'>
								<span className='single-item-bottom-menu'>
									<MenuLinkButton
										toggleMenu={() => {
											toggleMenu('basicinfo');
										}}
										btnName='Basic Info'
									/>
									<MenuLinkButton
										toggleMenu={() => {
											toggleMenu('address');
										}}
										btnName='Address'
									/>
									<MenuLinkButton
										toggleMenu={() => {
											toggleMenu('company');
										}}
										btnName='Company'
									/>

									<span
										className={`menu-selected ${
											isOpen === 'basicinfo'
												? 'basicinfo-show'
												: isOpen === 'address'
												? 'address-show'
												: isOpen === 'company'
												? 'company-show'
												: ''
										}`}
									></span>
								</span>

								<span className='single-item-bottom-info-wrapper'>
									<UserDetailBasicInfoComponent isOpen={isOpen} data={data} />

									<UserDetailAddressComponent
										isOpen={isOpen}
										data={data.address}
									/>

									<UserDetailCompanyComponent
										isOpen={isOpen}
										data={data.company}
									/>
								</span>

								<span className='prev-next-btn'>
									<span
										className={`prev-btn ${prevClick}`}
										onClick={() => prevBtn(data.id)}
									>
										Prev
									</span>
									<span
										className={`next-btn ${nextClick}`}
										onClick={() => nextBtn(data.id)}
									>
										Next
									</span>
								</span>
							</span>
						</div>
					</div>
				</div>
			</>
		)
	);
};
