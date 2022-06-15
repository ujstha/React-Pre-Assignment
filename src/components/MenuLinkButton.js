export const MenuLinkButton = ({ toggleMenu, btnName }) => {
	return (
		<span className='menu-link' onClick={toggleMenu}>
			{btnName}
		</span>
	);
};
