import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
	const { id, image, title, category, category_bg, card_bg, primary_color } =
		campaign || {};
	return (
		<>
			<Link to={`/campaignDetails/${id}`}>
				<div
					style={{ backgroundColor: card_bg }}
					className={`card card-compact`}
				>
					<figure>
						<img src={image} alt={`${title}'s image`} className="h-48 w-full" />
					</figure>
					<div className="p-4">
						<div
							className="inline-block px-2 py-1 mb-2 rounded-md text-xs"
							style={{ backgroundColor: category_bg, color: primary_color }}
						>
							{category}
						</div>

						<h2 style={{ color: primary_color }} className={`font-bold`}>
							{title}
						</h2>
					</div>
				</div>
			</Link>
		</>
	);
};

CampaignCard.propTypes = {
	campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
