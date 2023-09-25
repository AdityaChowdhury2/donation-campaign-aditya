/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useState } from 'react';

import { DonationCampaignContext } from '../../layout/MainLayout';
import DonatedCampaignCard from '../../components/DonatedCampaignCard/DonatedCampaignCard';

const DonationPage = () => {
	const { donatedCampaigns } = useContext(DonationCampaignContext);
	const [isShowAll, setShowAll] = useState(false);

	return (
		<div className="container mt-12">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{!isShowAll
					? donatedCampaigns
							.slice(0, 4)
							.map(campaign => (
								<DonatedCampaignCard key={campaign.id} campaign={campaign} />
							))
					: donatedCampaigns.map(campaign => (
							<DonatedCampaignCard key={campaign.id} campaign={campaign} />
					  ))}
			</div>
			<div className="flex justify-center mt-10">
				{!isShowAll && donatedCampaigns.length > 4 && (
					<button
						className="bg-green-500 px-3 py-2 rounded text-white"
						onClick={() => setShowAll(true)}
					>
						Show All
					</button>
				)}
				{/* {!isShowAll && donatedCampaigns.length > 4 ? (
					<button
						className="bg-green-500 px-3 py-2 rounded text-white"
						onClick={() => setShowAll(!isShowAll)}
					>
						Show All
					</button>
				) : donatedCampaigns.length || isShowAll ? (
					<button
						className=" bg-red-500 px-3 py-2 rounded text-white"
						onClick={() => setShowAll(!isShowAll)}
					>
						View Less
					</button>
				) : (
					<div className="flex justify-center h-[30vh]">No Data Found</div>
				)} */}
			</div>
		</div>
	);
};

export default DonationPage;
