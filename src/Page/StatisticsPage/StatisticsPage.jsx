import { useContext } from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import {
	CampaignsContext,
	DonationCampaignContext,
} from '../../layout/MainLayout';

const StatisticsPage = () => {
	const [donatedCampaigns] = useContext(DonationCampaignContext);
	const campaigns = useContext(CampaignsContext);
	const donatedAmounts = donatedCampaigns.reduce(
		(acc, prev) => acc + prev.price,
		0
	);
	const totalDonations = campaigns.reduce((acc, prev) => acc + prev.price, 0);
	const data = [
		{ name: 'Your Donation', amount: donatedAmounts },
		{ name: 'Total Donation', amount: totalDonations },
	];
	const COLORS = ['#00C49F', '#FF444A'];
	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? 'start' : 'end'}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};
	return (
		<div className="flex justify-center">
			<PieChart width={600} height={600}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={200}
					fill="#8884d8"
					dataKey="amount"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Legend />
			</PieChart>
		</div>
	);
};

export default StatisticsPage;
