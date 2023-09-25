import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { setDonationIdToLS } from '../../utils/LocalStorage';
import swal from 'sweetalert';
import {
	CampaignsContext,
	DonationCampaignContext,
} from '../../layout/MainLayout';

const CampaignDetails = () => {
	const [campaign, setCampaign] = useState(null);
	const [isHovering, setIsHovering] = useState(false);
	const [donatedCampaigns, setDonatedCampaigns] = useContext(
		DonationCampaignContext
	);

	const campaigns = useContext(CampaignsContext);
	const { campaignId } = useParams();
	const { image, price, primary_color, title, description, id } =
		campaign || {};
	const handleMouseEnter = () => {
		setIsHovering(true);
	};
	const handleMouseLeave = () => {
		setIsHovering(false);
	};
	const handleDonateButtonCLick = id => {
		const response = setDonationIdToLS(id);
		setDonatedCampaigns([...donatedCampaigns, campaign]);
		response
			? swal('Thanks!', 'Your Donation received successfully!', 'success')
			: swal('Oops', 'You already donate in this campaign', 'error');
	};

	useEffect(() => {
		setCampaign(campaigns.find(campaign => campaign.id === Number(campaignId)));
	}, [campaignId, campaigns]);

	return (
		<div className="container px-3">
			{campaign ? (
				<div>
					<div className="relative my-14">
						<img
							src={image}
							alt={`${title}'s image`}
							className="rounded-lg w-full h-[70vh] object-cover"
						/>
						<div className="p-4 md:p-6 lg:p-10  absolute bg-[#0b0b0b80] rounded-b-lg w-full bg-opacity-10 bottom-0">
							<button
								style={{
									backgroundColor: !isHovering ? primary_color : '#DC2626',
								}}
								className={`rounded px-3 py-1  text-white text-xs md:text-base duration-300`}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onClick={() => handleDonateButtonCLick(id)}
							>
								Donate ${price}
							</button>
						</div>
					</div>{' '}
					<div>
						<h2 className="font-bold text-4xl mb-6">{title}</h2>
						<p>{description}</p>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center h-[60vh]">
					<PulseLoader color="#ef4444" />{' '}
				</div>
			)}
		</div>
	);
};

export default CampaignDetails;
