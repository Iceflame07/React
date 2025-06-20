import React from 'react';

const Campaign = ({ title, target, currentAmount, targetAmount, currentBalance }) => (
  <div className="border p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>Target: {target}</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${(currentAmount/targetAmount)*100}%` }}>
      </div>
    </div>
    <p>₦{currentAmount} raised of ₦{targetAmount} target</p>
    <p>Current Balance: ₦{currentBalance}</p>
  </div>
);

export default Campaign;