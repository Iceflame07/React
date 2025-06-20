import React from 'react';
import Campaign from './Campaign';

const CampaignList = () => {
  const pastCampaigns = [
    { title: 'Land Dispute Resolution', target: 'Help resolve community land dispute', currentAmount: 150000, targetAmount: 200000, currentBalance: 50000 },
    { title: 'Domestic Violence Case', target: 'Legal support for abuse victim', currentAmount: 80000, targetAmount: 100000, currentBalance: 0 },
    { title: 'Tenant Rights Protection', target: 'Fight against illegal eviction', currentAmount: 120000, targetAmount: 120000, currentBalance: 0 }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Past Campaigns</h2>
      {pastCampaigns.map((campaign, index) => (
        <Campaign key={index} {...campaign} />
      ))}
    </div>
  );
};

export default CampaignList;