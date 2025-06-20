import { useState } from 'react';
// import Campaign from '../components/Campaign';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const [activeCampaigns, setActiveCampaigns] = useState([
    { title: 'Child Custody Case', target: 'Help single mother regain custody', currentAmount: 75000, targetAmount: 150000, currentBalance: 25000 },
    { title: 'Wrongful Termination', target: 'Legal support for unfairly dismissed worker', currentAmount: 50000, targetAmount: 100000, currentBalance: 50000 }
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Navbar/>
      
      <h1 className="text-3xl font-bold mb-6">Welcome to LegalLift</h1>
      <p className="mb-8 text-lg">
        Bridging the justice gap for low-income Nigerians through community support and legal aid.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">Active Campaigns</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* {setActiveCampaigns.map((createCampaign) => {
            <Campaign key={createCampaign}/>
        })}
        {activeCampaigns.map((campaign, index) => (
          <Campaign key={index} {...campaign} />
        ))} */}
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg min-h-screen ">
        <h2 className="text-xl font-bold mb-4">How LegalLift Works</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold mb-2">1. Create a Campaign</h3>
            <p>Describe your legal need and set a funding target.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold mb-2">2. Get Matched</h3>
            <p>We connect you with lawyers willing to help.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold mb-2">3. Receive Support</h3>
            <p>The community contributes to fund your case.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;