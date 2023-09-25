import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCampaignCard = ({ campaign }) => {
	const {
		id,
		title,
		image,
		price,
		card_bg,
		category,
		category_bg,
		primary_color,
		secondary_color,
	} = campaign;
	return (
		<div className="px-3">
			<div
				style={{ backgroundColor: card_bg }}
				className="flex flex-col md:flex-row w-full bg-base-100 shadow-xl rounded-lg"
			>
				<figure className="md:w-1/3">
					<img
						src={image}
						alt={`${title}'s image`}
						className="h-full  md:rounded-l-lg md:rounded-r-none rounded-t-lg"
					/>
				</figure>
				<div className="p-8 flex-1">
					<div
						className="inline-block px-2 py-1 mb-2 rounded-md text-sm"
						style={{ backgroundColor: category_bg, color: primary_color }}
					>
						{category}
					</div>
					<h2 className="card-title">{title}</h2>
					<p style={{ color: primary_color }} className="font-semibold">
						${price}
					</p>
					<Link to={`/campaignDetails/${id}`}>
						<button
							style={{
								backgroundColor: primary_color,
							}}
							className="rounded px-3 py-1 mt-6 text-white text-xs md:text-base duration-300"
							onMouseEnter={e => {
								e.target.style.backgroundColor = secondary_color;
							}}
							onMouseLeave={e => {
								e.target.style.backgroundColor = primary_color;
							}}
						>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

DonatedCampaignCard.propTypes = {
	campaign: PropTypes.object.isRequired,
};

export default DonatedCampaignCard;
