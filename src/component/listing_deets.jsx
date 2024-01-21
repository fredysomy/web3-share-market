
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconf"; 
import { useNavigate } from "react-router-dom";

const StockDataPage = () => {
  const { address } = useParams(); // 
  const [list, setList] = useState([]);
  const [load, loaded] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const fetchShares = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sdsdf"));
        const newShares = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
       console.log(newShares)
        setList(newShares.find((item) => item.id === address));
        loaded(true);
        console.log(list);
      } catch (error) {
        console.error("Error fetching shares from Firestore:", error.message);
      }
    };

    fetchShares();
  }, []);
  const handleBuyClick = () => {

    console.log("Buy button clicked!");
  };

  const handleBackClick = () => {
   
    nav("/listing");
  };

  return (
    <div>
     
      <div className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Stock Data</h1>
          <button
            onClick={() => {
              handleBackClick();
            }}
            className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Back to Listings
          </button>
        </div>
      </div>

    
      {load ? (
        <>
          {" "}
          <div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">
                {list.companyData.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Contract Address:{" "}
                <span className="text-gray-800">
                  {list.companyData.address}
                </span>
              </p>
              <p className="text-gray-600 mb-4">
                Asking Price for Share:{" "}
                <span className="text-gray-800">
                  ${list.companyData.sharePrice}
                </span>
              </p>
            
              <div className="flex space-x-4">
                <button
                  onClick={handleBuyClick}
                  className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-300"
                >
                  Buy
                </button>
                <button
                  onClick={handleBuyClick}
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-400 transition duration-300"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Loading</h3>
        </>
      )}
    </div>
  );
};

export default StockDataPage;
