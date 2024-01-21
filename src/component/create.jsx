// src/components/NewCompanyPage.js
import React, { useState } from 'react';
import {db} from '../../firebaseconf';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const NewCompanyPage = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    address: '',
    totalShares: '',
    sharePrice: '',
  });
  const nav=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle the form submission logic, e.g., send data to server or update state
    console.log('Company Data Submitted:', companyData);
    try {
        const docRef = await addDoc(collection(db, "sdsdf"), {
          companyData
        });
        console.log("Document written with ID: ", docRef.id);
        nav("/dashboard")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className=" p-8 rounded-lg shadow-md bg-blue-500">
        <h2 className="text-3xl font-bold mb-6">Create a New Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={companyData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={companyData.address}
              onChange={handleChange}
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="totalShares" className="block text-sm font-medium text-gray-600">
              Total Shares
            </label>
            <input
              type="number"
              id="totalShares"
              name="totalShares"
              value={companyData.totalShares}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="sharePrice" className="block text-sm font-medium text-gray-600">
              Share Price
            </label>
            <input
              type="number"
              id="sharePrice"
              name="sharePrice"
              value={companyData.sharePrice}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition duration-300"
          >
            Create Company
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCompanyPage;
