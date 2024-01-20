// src/components/UserDashboard.js
import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectKitButton } from 'connectkit';

const UserDashboard = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Stock A', quantity: 10 },
    { id: 2, name: 'Stock B', quantity: 5 },
    // Add more stocks as needed
  ]);

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-8 rounded-lg shadow-md text-white">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">CryptoShares</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#settings" className="text-gray-200 hover:text-white transition duration-300">
              Settings
            </a>
            <ConnectKitButton/>
          </div>
        </div>

        {/* Name Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">User Details</h2>
          <p className="text-gray-300">Account Adress : 0x45736453gh4875y38475</p>
        </div>

        {/* Stocks Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Stocks Section</h2>
          <ul>
            {stocks.map((stock) => (
              <li key={stock.id} className="mb-2">
                <div className="bg-gray-200 p-4 rounded-md text-gray-800">
                  <span className="font-semibold">{stock.name}</span> - Quantity: {stock.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

