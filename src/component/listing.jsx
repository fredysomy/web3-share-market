// src/components/ListingPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconf"; // Import your Firebase configuration
import { ConnectKitButton } from 'connectkit';
const ListingPage = () => {
  const [shares, setShares] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShares = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sdsdf"));
        const newShares = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setShares(newShares);
        console.log(newShares);
      } catch (error) {
        console.error("Error fetching shares from Firestore:", error.message);
      }
    };

    fetchShares();
  }, []);

  const handleShareClick = (address) => {
    navigate(`/listing/${address}`);
  };
  const handleDash = () => {
    navigate(`/dashboard`);
  };

  return (
    <div className="container mx-auto mt-8">
         <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">CryptoShares</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={()=>{handleDash()}} className="text-black hover:text-black transition duration-300 bg-blue-400 p-2 rounded-2xl
            ">
              Dashboard
            </button>
            <ConnectKitButton/>
          </div>
        </div>
      <h2 className="text-3xl font-bold mb-4">Share Listings</h2>
      <div className=" gap-4 flex  flex-col">
      {shares.map(({ id, companyData }) => (
          <div key={id} className=" p-4 rounded-md shadow-md bg-blue-300 hover:shadow-lg transition duration-300" onClick={()=>{handleShareClick(id)}}>
            <h3 className="text-xl font-semibold mb-2">{companyData.name}</h3>
            <p className="text-gray-600">{companyData.address}</p>
            <p className="text-gray-800 mt-2">Total Shares: {companyData.totalShares}</p>
            <p className="text-gray-800">Share Price: {companyData.sharePrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
