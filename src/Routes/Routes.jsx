import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Page/Home/Home';
import DonationPage from '../Page/DonationPage/DonationPage';

const myCustomRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/donation',
				element: <DonationPage />,
			},
			{
				path: '/statistics',
				element: <DonationPage />,
			},
		],
	},
]);

export default myCustomRouter;
