import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Page/Home/Home';
import DonationPage from '../Page/DonationPage/DonationPage';
import CampaignDetails from '../Page/CampaignDetails/CampaignDetails';

const myCustomRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('/data.json'),
			},
			{
				path: '/donation',
				element: <DonationPage />,
			},
			{
				path: '/statistics',
				element: <DonationPage />,
			},
			{
				path: '/campaignDetails',
				element: <CampaignDetails />,
			},
		],
	},
]);

export default myCustomRouter;
