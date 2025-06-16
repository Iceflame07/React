const Dashboard = ({ role, onLogout }) => {
  const getRoleName = () => {
    switch(role) {
      case 'client': return 'Client'
      case 'lawyer': return 'Lawyer'
      case 'donor': return 'Donor'
      default: return 'role'
    }
  }

  const getRoleBadgeClass = () => {
    switch(role) {
      case 'client': return 'role-client'
      case 'lawyer': return 'role-lawyer'
      case 'donor': return 'role-donor'
      default: return 'role'
    }
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Welcome to LegalLift</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>
      
      <div className="dashboard-content">
        <p>
          You are logged in as: 
          <span className={`role-badge ${getRoleBadgeClass()}`}>
            {getRoleName()}
          </span>
        </p>
        
        {role === 'client' && (
          <div>
            <h2>Client Dashboard</h2>
            <p>As a low-income earner in Nigeria,
              you can create legal funding requests here,
              to fund your legal cases.</p>
          </div>
        )}
        
        {role === 'lawyer' && (
          <div>
            <h2>Lawyer Dashboard</h2>
            <p>As a lawyer, you can view,reject and accept cases
              from clients who need legal assistance.</p>
          </div>
        )}
        
        {role === 'donor' && (
          <div>
            <h2>Donor Dashboard</h2>
            <p>As a donor,you can browse legal cases,
              check the lawyer bio and contribute to help low-income 
              individuals get legal representation.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard