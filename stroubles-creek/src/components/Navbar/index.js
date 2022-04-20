import React from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/overview'>
			Overview
		</NavLink>
		<NavLink to='/implementation'>
			Implementation
		</NavLink>
		<NavLink to='/validation'>
			Validation
		</NavLink>
		<NavLink to='/charts'>
			Charts
		</NavLink>
		<NavLink to='/data'>
			Data
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
