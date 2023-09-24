import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../../components/CampaignCard/CampaignCard';

const Home = () => {
	const campaigns = useLoaderData();

	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-14 px-3">
			{campaigns.map(campaign => (
				<CampaignCard campaign={campaign} key={campaign.id} />
			))}
		</div>
	);
};

export default Home;
