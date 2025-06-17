import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ role, onUpdateProfile }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    username: '',
    phone: '',
    bio: '',
    ...(role === 'lawyer' && { 
      specialization: '', 
      barNumber: '',
      yearsOfExperience: '' 
    }),
    ...(role === 'donor' && { 
      organization: '',
      donationPreference: '' 
    })
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(profileData);
    setSuccessMessage('Profile updated successfully!');
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

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

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <button 
          onClick={() => navigate('/dashboard')} 
          className="back-btn"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="profile-info">
        <div className="profile-summary">
          <div className="profile-role">
            <span className={`role-badge ${getRoleBadgeClass()}`}>
              {getRoleName()}
            </span>
          </div>
          
          {!isEditing && (
            <>
              {profileData.username && <p><strong>Username:</strong> {profileData.username}</p>}
              {profileData.phone && <p><strong>Phone:</strong> {profileData.phone}</p>}
              {profileData.bio && <p><strong>Bio:</strong> {profileData.bio}</p>}
              
              {role === 'lawyer' && profileData.specialization && (
                <p><strong>Specialization:</strong> {profileData.specialization}</p>
              )}
              {role === 'lawyer' && profileData.barNumber && (
                <p><strong>Bar Number:</strong> {profileData.barNumber}</p>
              )}
              {role === 'lawyer' && profileData.yearsOfExperience && (
                <p><strong>Years of Experience:</strong> {profileData.yearsOfExperience}</p>
              )}
              
              {role === 'donor' && profileData.organization && (
                <p><strong>Organization:</strong> {profileData.organization}</p>
              )}
              {role === 'donor' && profileData.donationPreference && (
                <p><strong>Donation Preference:</strong> {profileData.donationPreference}</p>
              )}
            </>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                rows="3"
              />
            </div>
            
            {role === 'lawyer' && (
              <>
                <div className="form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    value={profileData.specialization}
                    onChange={handleChange}
                    placeholder="Your legal specialization"
                  />
                </div>

                <div className="form-group">
                  <label>Bar Number</label>
                  <input
                    type="text"
                    name="barNumber"
                    value={profileData.barNumber}
                    onChange={handleChange}
                    placeholder="Your bar association number"
                  />
                </div>
                
                <div className="form-group">
                  <label>Years of Experience</label>
                  <input
                    type="number"
                    name="yearsOfExperience"
                    value={profileData.yearsOfExperience}
                    onChange={handleChange}
                    placeholder="Years of legal practice"
                    min="0"
                  />
                </div>
              </>
            )}

            {role === 'donor' && (
              <>
                <div className="form-group">
                  <label>Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={profileData.organization}
                    onChange={handleChange}
                    placeholder="Your organization (if any)"
                  />
                </div>

                <div className="form-group">
                  <label>Donation Preference</label>
                  <select
                    name="donationPreference"
                    value={profileData.donationPreference}
                    onChange={handleChange}
                  >
                    <option value="">Select preference</option>
                    <option value="civil">Civil Cases</option>
                    <option value="criminal">Criminal Cases</option>
                    <option value="family">Family Law</option>
                    <option value="human_rights">Human Rights</option>
                    <option value="no_preference">No Preference</option>
                  </select>
                </div>
              </>
            )}

            <div className="form-actions">
              <button type="submit" className="btn save-btn">Save Profile</button>
              <button 
                type="button" 
                className="btn cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-actions">
            <button 
              onClick={() => setIsEditing(true)}
              className="btn edit-btn"
            >
              Edit Profile
            </button>
          </div>
        )}

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;