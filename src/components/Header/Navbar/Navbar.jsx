import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';
import { Icon } from '@iconify/react';
const links = (
	<>
		<li>
			<NavLink
				to={'/'}
				className={({ isActive }) =>
					isActive
						? 'text-red-500 underline underline-offset-4 font-bold active:bg-white active:text-base'
						: ''
				}
			>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink
				to={'/donation'}
				className={({ isActive }) =>
					isActive ? 'text-red-500 underline underline-offset-4 font-bold' : ''
				}
			>
				Donation
			</NavLink>
		</li>
		<li>
			<NavLink
				to={'/statistics'}
				className={({ isActive }) =>
					isActive ? 'text-red-500 underline underline-offset-4 font-bold' : ''
				}
			>
				Statistics
			</NavLink>
		</li>
	</>
);

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="w-1/2">
					<Link to="/">
						<Logo />
					</Link>
				</div>

				<div className="w-1/2 justify-end">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<Icon icon="ri:menu-3-fill" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm bg-base-100 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
						>
							{links}
						</ul>
					</div>
					<div className="hidden lg:flex">
						<ul className="flex gap-12 px-1">{links}</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
