import crowdfundingWallpaper from './images/CrowdfundingRefunds.jpg';
import UserProfile from './UserProfile';
import About from './About';
import { useState } from 'react';

const Dashboard = ({ role, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const getRoleName = () => {
    switch(role) {
      case 'client': return 'Client';
      case 'lawyer': return 'Lawyer';
      case 'donor': return 'Donor';
      default: return 'User';
    }
  };

  const getRoleBadgeClass = () => {
    switch(role) {
      case 'client': return 'role-client';
      case 'lawyer': return 'role-lawyer';
      case 'donor': return 'role-donor';
      default: return 'role-user';
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'campaign':
        return <Campaign role={role} />;
      case 'profile':
        return <UserProfile role={role} />;
      case 'cases':
        return <Cases role={role} />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <p>
              You are logged in as: 
              <span className={`role-badge ${getRoleBadgeClass()}`}>
                {getRoleName()}
              </span>
            </p>
            
            {role === 'client' && (
              <div className="role-section">
                <h2>Client Dashboard</h2>
                <img 
                  src={crowdfundingWallpaper} 
                  alt="Legal crowdfunding illustration"
                  className="dashboard-image"
                />
                <p>
                  As a low-income earner in Nigeria,
                  you can create legal funding requests here,
                  to fund your legal cases.
                </p>
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('campaign')}
                >
                  Create New Case
                </button>
              </div>
            )}
            
            {role === 'lawyer' && (
              <div className="role-section">
                <h2>Lawyer Dashboard</h2>
                <img 
                  src={crowdfundingWallpaper} 
                  alt="Lawyer working illustration"
                  className="dashboard-image"
                />
                <p>
                  As a lawyer, you can view, reject and accept cases
                  from clients who need legal assistance.
                </p>
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('cases')}
                >
                  View All Cases
                </button>
              </div>
            )}
            
            {role === 'donor' && (
              <div className="role-section">
                <h2>Donor Dashboard</h2>
                <img 
                  src={crowdfundingWallpaper} 
                  alt="Crowdfunding donors illustration"
                  className="dashboard-image"
                />
                <p>
                  As a donor, you can browse legal cases,
                  check the lawyer bio and contribute to help low-income 
                  individuals get legal representation.
                </p>
                <button 
                  className="action-btn"
                  onClick={() => setActiveTab('cases')}
                >
                  Browse Cases
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to LegalLift</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        
        {role === 'client' && (
          <button 
            className={`tab-btn ${activeTab === 'campaign' ? 'active' : ''}`}
            onClick={() => setActiveTab('campaign')}
          >
            Create Case
          </button>
        )}
        
        {(role === 'lawyer' || role === 'donor') && (
          <button 
            className={`tab-btn ${activeTab === 'cases' ? 'active' : ''}`}
            onClick={() => setActiveTab('cases')}
          >
            {role === 'lawyer' ? 'Manage Cases' : 'Browse Cases'}
          </button>
        )}
        
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        
        <button 
          className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Us
        </button>
      </div>
      
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;