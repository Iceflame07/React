import React, { useState } from 'react';

const UserProfile = ({ username, password, onUpdate }) => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({ username, password });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setEditable(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {editable ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        </form>
      ) : (
        <div>
          <p>Username: {username}</p>
          <p>Password: ********</p>
          <button 
            onClick={() => setEditable(true)} 
            className="bg-blue-500 text-white p-2 rounded mt-2">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;