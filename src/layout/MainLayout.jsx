import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import { getDonationIdFromLS } from '../utils/LocalStorage';

export const DonationAmountContext = createContext(0);
export const CampaignsContext = createContext([]);
const MainLayout = () => {
	const campaigns = useLoaderData();
	const [donatedAmounts, setDonatedAmounts] = useState(0);

	useEffect(() => {
		const campaignIdsFromLS = getDonationIdFromLS();
		const donatedCampaigns = campaigns.filter(campaign =>
			campaignIdsFromLS.find(id => campaign.id === id)
		);
		setDonatedAmounts(
			donatedCampaigns.reduce((acc, prev) => acc + prev.price, 0)
		);
	}, [campaigns]);
	return (
		<>
			<Header />
			<CampaignsContext.Provider value={campaigns}>
				<DonationAmountContext.Provider value={donatedAmounts}>
					<Outlet />
				</DonationAmountContext.Provider>
			</CampaignsContext.Provider>
		</>
	);
};

export default MainLayout;
