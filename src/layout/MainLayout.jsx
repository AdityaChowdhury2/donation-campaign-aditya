import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import { getDonationIdFromLS } from '../utils/LocalStorage';

export const DonationCampaignContext = createContext(0);
export const CampaignsContext = createContext([]);
const MainLayout = () => {
	const campaigns = useLoaderData();
	const [donatedCampaigns, setDonatedCampaigns] = useState([]);
	useEffect(() => {
		const campaignIdsFromLS = getDonationIdFromLS();
		if (campaignIdsFromLS.length && campaigns) {
			const donatedCampaignsFromLS = campaigns?.filter(campaign =>
				campaignIdsFromLS?.find(id => campaign.id === id)
			);
			setDonatedCampaigns(donatedCampaignsFromLS);
		} else {
			console.log('no data found in local storage');
		}
	}, [campaigns]);

	return (
		<>
			<Header />
			<CampaignsContext.Provider value={campaigns}>
				{
					<DonationCampaignContext.Provider
						value={[donatedCampaigns, setDonatedCampaigns]}
					>
						<Outlet />
					</DonationCampaignContext.Provider>
				}
			</CampaignsContext.Provider>
		</>
	);
};

export default MainLayout;
