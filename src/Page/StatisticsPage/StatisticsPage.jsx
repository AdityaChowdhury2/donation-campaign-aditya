import { useContext } from 'react';
import { DonationAmountContext } from '../../layout/MainLayout';

const StatisticsPage = () => {
	const donatedAmount = useContext(DonationAmountContext);
	console.log(donatedAmount);
	// const
	return <div></div>;
};

export default StatisticsPage;
