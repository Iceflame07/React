import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LegalCase = ({ 
  caseTitle: initialCaseTitle = '', 
  caseType: initialCaseType = '', 
  court: initialCourt = '',
  location: initialLocation = '',
  description: initialDescription = '', 
  targetAmount: initialTargetAmount = '', 
  amountRaised: initialAmountRaised = '',
  status: initialStatus = 'Pending'
}) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [caseData, setCaseData] = useState({
    caseTitle: initialCaseTitle,
    caseType: initialCaseType,
    court: initialCourt,
    location: initialLocation,
    description: initialDescription,
    targetAmount: initialTargetAmount,
    amountRaised: initialAmountRaised,
    status: initialStatus
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="legal-case">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Case Title</label>
            <input
              type="text"
              name="caseTitle"
              value={caseData.caseTitle}
              onChange={handleChange}
              placeholder="E.g. Land dispute in Lagos"
              required
            />
          </div>

          <div className="form-group">
            <label>Case Type</label>
            <select
              name="caseType"
              value={caseData.caseType}
              onChange={handleChange}
              required
            >
              <option value="">Select case type</option>
              <option value="Land Dispute">Land Dispute</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Employment Dispute">Employment Dispute</option>
              <option value="Tenant Rights">Tenant Rights</option>
              <option value="Police Brutality">Police Brutality</option>
              <option value="Inheritance">Inheritance</option>
            </select>
          </div>

          <div className="form-group">
            <label>Court</label>
            <select
              name="court"
              value={caseData.court}
              onChange={handleChange}
              required
            >
              <option value="">Select court</option>
              <option value="Magistrate Court">Magistrate Court</option>
              <option value="High Court">High Court</option>
              <option value="Customary Court">Customary Court</option>
              <option value="Sharia Court">Sharia Court</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <select
              name="location"
              value={caseData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select state</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Rivers">Rivers</option>
              <option value="Enugu">Enugu</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={caseData.description}
              onChange={handleChange}
              placeholder="Describe the legal issue in detail"
              required
            />
          </div>

          <div className="form-group">
            <label>Target Amount (₦)</label>
            <input
              type="number"
              name="targetAmount"
              value={caseData.targetAmount}
              onChange={handleChange}
              placeholder="Estimated legal fees"
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={caseData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Awaiting Hearing">Awaiting Hearing</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="case-details">
          <h3>{caseData.caseTitle}</h3>
          <p><strong>Type:</strong> {caseData.caseType}</p>
          <p><strong>Court:</strong> {caseData.court}, {caseData.location}</p>
          <p><strong>Description:</strong> {caseData.description}</p>
          <p><strong>Target Amount:</strong> ₦{Number(caseData.targetAmount).toLocaleString()}</p>
          <p><strong>Amount Raised:</strong> ₦{Number(caseData.amountRaised || 0).toLocaleString()}</p>
          <p><strong>Status:</strong> <span className={`status-${caseData.status.toLowerCase().replace(' ', '-')}`}>{caseData.status}</span></p>
          
          <div className="case-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => navigate(`/donate/${caseData.caseTitle}`)}>Donate</button>
            <button onClick={() => navigate(`/case-details/${caseData.caseTitle}`)}>View Details</button>
          </div>
        </div>
      )}
    </div>
  );
};

const LegalCasesList = () => {
  const [cases, setCases] = useState([
    {
      id: 1,
      caseTitle: "Land Dispute in Ojota",
      caseType: "Land Dispute",
      court: "High Court",
      location: "Lagos",
      description: "Family fighting over ancestral land in Ojota area of Lagos. The plaintiff is a widow with 4 children being forced off the property by relatives.",
      targetAmount: 500000,
      amountRaised: 125000,
      status: "In Progress"
    },
    {
      id: 2,
      caseTitle: "Unlawful Termination at Abuja Restaurant",
      caseType: "Employment Dispute",
      court: "Industrial Court",
      location: "Abuja",
      description: "Single mother of three was fired without compensation after 8 years of service at a popular restaurant in Wuse 2.",
      targetAmount: 750000,
      amountRaised: 250000,
      status: "Awaiting Hearing"
    },

  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCase, setNewCase] = useState({
    caseTitle: '',
    caseType: '',
    court: '',
    location: '',
    description: '',
    targetAmount: '',
    amountRaised: '0',
    status: 'Pending'
  });

  const handleAddCase = (e) => {
    e.preventDefault();
    const caseToAdd = {
      ...newCase,
      id: cases.length + 1,
      targetAmount: Number(newCase.targetAmount),
      amountRaised: Number(newCase.amountRaised)
    };
    setCases([...cases, caseToAdd]);
    setNewCase({
      caseTitle: '',
      caseType: '',
      court: '',
      location: '',
      description: '',
      targetAmount: '',
      amountRaised: '0',
      status: 'Pending'
    });
    setShowAddForm(false);
  };

  const handleNewCaseChange = (e) => {
    const { name, value } = e.target;
    setNewCase(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const updateCase = (id, updatedData) => {
    setCases(cases.map(caseItem => 
      caseItem.id === id ? { ...caseItem, ...updatedData } : caseItem
    ));
  };

  return (
    <div className="legal-cases-container">
      <header>
        <h1>Legal Aid Cases for Low-Income Nigerians</h1>
        <p>Support access to justice for those who cannot afford legal representation</p>
      </header>

      <button className="add-case-btn" onClick={() => setShowAddForm(true)}>
        + Add New Case
      </button>

      {showAddForm && (
        <div className="add-case-form">
          <h2>Add New Legal Case</h2>
          <LegalCase 
            caseTitle={newCase.caseTitle}
            caseType={newCase.caseType}
            court={newCase.court}
            location={newCase.location}
            description={newCase.description}
            targetAmount={newCase.targetAmount}
            amountRaised={newCase.amountRaised}
            status={newCase.status}
            isEditing={true}
            handleChange={handleNewCaseChange}
            handleSubmit={handleAddCase}
          />
        </div>
      )}

      <div className="cases-list">
        {cases.map(caseItem => (
          <div key={caseItem.id} className="case-card">
            <LegalCase 
              caseTitle={caseItem.caseTitle}
              caseType={caseItem.caseType}
              court={caseItem.court}
              location={caseItem.location}
              description={caseItem.description}
              targetAmount={caseItem.targetAmount}
              amountRaised={caseItem.amountRaised}
              status={caseItem.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalCasesList;