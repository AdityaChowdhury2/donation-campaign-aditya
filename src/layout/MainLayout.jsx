import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import { createContext, useEffect, useState } from 'react';
import { getDonationIdFromLS } from '../utils/LocalStorage';
import Footer from '../components/Footer/Footer';

export const DonationCampaignContext = createContext(0);
export const CampaignsContext = createContext([]);
export const FilterTextContext = createContext('');
const MainLayout = () => {
	const campaigns = useLoaderData();
	const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);
	const [filterText, setFilterText] = useState('');
	const [donatedCampaigns, setDonatedCampaigns] = useState([]);
	const handleSearch = () => {
		console.log('searching..', filterText);
		setFilteredCampaigns(
			campaigns.filter(campaign =>
				campaign.category.toLowerCase().includes(filterText.toLowerCase())
			)
		);
	};
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
	console.log(donatedCampaigns);

	return (
		<>
			<FilterTextContext.Provider value={[handleSearch, setFilterText]}>
				<Banner />
			</FilterTextContext.Provider>

			<CampaignsContext.Provider value={filteredCampaigns}>
				{
					<DonationCampaignContext.Provider
						value={{ donatedCampaigns, setDonatedCampaigns }}
					>
						<Outlet />
					</DonationCampaignContext.Provider>
				}
			</CampaignsContext.Provider>
			<Footer />
		</>
	);
};

export default MainLayout;
