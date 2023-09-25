import CampaignCard from '../../components/CampaignCard/CampaignCard';
import { useContext } from 'react';
import { CampaignsContext } from '../../layout/MainLayout';

const Home = () => {
	const filteredCampaigns = useContext(CampaignsContext);
	return (
		<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-14 px-3">
			{filteredCampaigns.map(campaign => (
				<CampaignCard campaign={campaign} key={campaign.id} />
			))}
		</div>
	);
};

export default Home;
