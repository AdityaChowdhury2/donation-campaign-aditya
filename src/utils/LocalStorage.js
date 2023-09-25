const getDonationIdFromLS = () => {
    const donationIds = localStorage.getItem('donation_ids');
    if (donationIds) {
        return JSON.parse(donationIds);
    }
    else {
        return [];
    }
}

const setDonationIdToLS = (id) => {
    const donationIds = getDonationIdFromLS();
    // donationIds.find(id => id === donationIds)
    const isExist = donationIds?.find(donationId => id === donationId)
    if (!isExist) {
        donationIds.push(id);
        localStorage.setItem('donation_ids', JSON.stringify(donationIds));
        return 1;
    }
    return 0
}
export { setDonationIdToLS, getDonationIdFromLS };