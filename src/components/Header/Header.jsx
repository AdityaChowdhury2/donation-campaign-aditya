import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SearchSection from './SerchSection/SearchSection';

const Header = () => {
	const location = useLocation();
	const isHome = location.pathname === '/';
	return (
		<div
			className={`${
				isHome &&
				'bg-banner bg-neutral-100 bg-blend-overlay bg-cover bg-center bg-no-repeat'
			}`}
		>
			<div className="container">
				<Navbar />
				{isHome && <SearchSection />}
			</div>
		</div>
	);
};

export default Header;
