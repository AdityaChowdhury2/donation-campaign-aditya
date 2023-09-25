import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Page/Home/Home';
import DonationPage from '../Page/DonationPage/DonationPage';
import CampaignDetails from '../Page/CampaignDetails/CampaignDetails';
import ErrorPage from '../Page/ErrorPage/ErrorPage';
import StatisticsPage from '../Page/StatisticsPage/StatisticsPage';

const myCustomRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		loader: () => fetch('/data.json'),
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
				element: <StatisticsPage />,
			},
			{
				path: '/campaignDetails/:campaignId',
				element: <CampaignDetails />,
			},
		],
		errorElement: <ErrorPage />,
	},
]);

export default myCustomRouter;
