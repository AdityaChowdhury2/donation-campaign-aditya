import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

const CampaignDetails = () => {
	const [campaign, setCampaign] = useState(null);
	const campaigns = useLoaderData();
	const { campaignId } = useParams();
	useEffect(() => {
		setCampaign(campaigns.find(campaign => campaign.id === Number(campaignId)));
	}, [campaignId, campaigns]);

	return (
		<>
			{campaign ? (
				<div className="container">
					<div className="relative mx-3">
						<img
							src={campaign.image}
							alt={`${campaign.title}'s image`}
							className="rounded-lg w-full h-[70vh] object-cover"
						/>
						<div className="p-4 md:p-6 lg:p-10  absolute bg-[#0b0b0b80] rounded-lg w-full bg-opacity-10 bottom-0">
							<button
								style={{ backgroundColor: campaign.primary_color }}
								className="rounded px-3 py-1  text-white text-xs md:text-base"
							>
								Donate ${campaign.price}
							</button>
						</div>
					</div>{' '}
				</div>
			) : (
				<div className="flex justify-center items-center h-[60vh]">
					<PulseLoader color="#ef4444" />{' '}
				</div>
			)}
		</>
	);
};

export default CampaignDetails;
