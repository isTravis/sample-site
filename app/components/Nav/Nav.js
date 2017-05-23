import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	// const toggleSlide = function() {
	// 	const elem = document.getElementsByClassName('nav-menu')[0];
	// 	if (elem.className === 'nav-menu') {
	// 		elem.className = 'nav-menu open';
	// 	} else {
	// 		elem.className = 'nav-menu';
	// 	}
	// };

	return (
		<div className="navbar-page">
			<nav className={'navbar'}>
				<Link to={'/'} className={'nav-icon'}>
					<img className={'title-image'} src={'/icon.png'} alt={'logo'} />
					<span className={'title'}>Known</span>
				</Link>

				<input className={'nav-input'} placeholder={'Search...'} type={'text'} />
				
				<div className={'nav-buttons'}>
					<Link to={'/'} className={'nav-button'}>About</Link>
					<Link to={'/'} className={'nav-button'}>Contribute</Link>
				</div>
				{/*<a role={'button'} tabIndex={0} className={'right'} onClick={toggleSlide}>Menu</a>

				<div role={'presentation'} className={'nav-menu'} onClick={toggleSlide}>
					<div className={'content'}>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>
				</div>*/}
			</nav>
		</div>
	);
};

export default NavBar;
