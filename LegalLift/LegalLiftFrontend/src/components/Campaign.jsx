import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Campaign = ({ 
  typeOfCase: initialTypeOfCase = '', 
  targetAmount: initialTargetAmount = '', 
  description: initialDescription = '', 
  currentAmount: initialCurrentAmount = '', 
  balance: initialBalance = '' 
}) => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    typeOfCase: initialTypeOfCase,
    targetAmount: initialTargetAmount,
    description: initialDescription,
    currentAmount: initialCurrentAmount,
    balance: initialBalance
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Type of Case</label>
            <input
              type="text"
              name="typeOfCase"
              value={profileData.typeOfCase}
              onChange={handleChange}
              placeholder="Enter type"
            />
          </div>

          <div className="form-group">
            <label>Target Amount</label>
            <input
              type="text"
              name="targetAmount"
              value={profileData.targetAmount}
              onChange={handleChange}
              placeholder="Enter the target amount"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={profileData.description}
              onChange={handleChange}
              placeholder="Describe your case"
            />
          </div>

          <div className="form-group">
            <label>Current Amount</label>
            <input
              type="text"
              name="currentAmount"
              value={profileData.currentAmount}
              onChange={handleChange}
              placeholder="Enter the current amount"
            />
          </div>

          <div className="form-group">
            <label>Balance</label>
            <input
              type="text"
              name="balance"
              value={profileData.balance}
              onChange={handleChange}
              placeholder="Enter the remaining balance"
            />
          </div>

          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Type of Case: {profileData.typeOfCase}</p>
          <p>Target Amount: {profileData.targetAmount}</p>
          <p>Description: {profileData.description}</p>
          <p>Current Amount: {profileData.currentAmount}</p>
          <p>Balance: {profileData.balance}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default Campaign