import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = ({ userRole, username, onUpdateProfile }) => {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState({
    username,
    phone: '',
    yearsOfExperience: '',
    ...(userRole === 'lawyer' && {barNumber: '', specialization: '' }),
    ...(userRole === 'donor' && {donationPreference: ''})
  })
  
  const [isEditing, setIsEditing] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Profile updated:', profileData)
    onUpdateProfile(profileData)
    setSuccessMessage('Profile updated successfully!')
    setIsEditing(false)
    setTimeout(() => setSuccessMessage(''), 1000)
  }

  const getRoleName = () => {
    switch(userRole) {
      case 'client': return 'Client'
      case 'lawyer': return 'Lawyer'
      case 'donor': return 'Donor'
      default: return 'User'
    }
  }

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
            <span className={`role-badge ${getRoleBadgeName()}`}>
              {getRoleName()}
            </span>
          </div>
          <p><strong>Username:</strong> {username}</p>
          {!isEditing && (
            <>
              {profileData.username && <p><strong>username:</strong> {profileData.username}</p>}
              {profileData.phone && <p><strong>Phone:</strong> {profileData.phone}</p>}
              {profileData.bio && <p><strong>Bio:</strong> {profileData.bio}</p>}
              
              {""}
              {userRole === 'lawyer' && profileData.specialization && (
                <p><strong>Specialization:</strong> {profileData.specialization}</p>
              )}
              {userRole === 'lawyer' && profileData.barNumber && (
                <p><strong>Bar Number:</strong> {profileData.barNumber}</p>
              )}
              
              {""}
              {userRole === 'donor' && profileData.organization && (
                <p><strong>Organization:</strong> {profileData.organization}</p>
              )}
            </>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
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
            {""}
            {userRole === 'lawyer' && (
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
              </>
            )}

            {""}
            {userRole === 'donor' && (
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
  )
}

export default UserProfile