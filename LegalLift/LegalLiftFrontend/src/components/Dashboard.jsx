import React, { useState } from 'react';
import AboutUs from '../pages/AboutUs';
import UserProfile from './UserProfile';
import Campaign from './Campaign';
import CampaignList from './CampaignList';
import ContactUs from './ContactUs';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">LegalLift Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('about')} 
                className={`w-full text-left p-2 rounded ${activeTab === 'about' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('profile')} 
                className={`w-full text-left p-2 rounded ${activeTab === 'profile' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
                User Profile
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('create')} 
                className={`w-full text-left p-2 rounded ${activeTab === 'create' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
                Create Campaign
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('view')} 
                className={`w-full text-left p-2 rounded ${activeTab === 'view' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
                View Campaigns
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('contact')} 
                className={`w-full text-left p-2 rounded ${activeTab === 'contact' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">
        {activeTab === 'about' && <AboutUs />}
        {activeTab === 'profile' && <UserProfile username="user123" password="password123" onUpdate={() => {}} />}
        {activeTab === 'create' && <CreateCampaign />}
        {activeTab === 'view' && <CampaignList />}
        {activeTab === 'contact' && <ContactUs />}
      </div>
    </div>
  );
};

export default Dashboard;