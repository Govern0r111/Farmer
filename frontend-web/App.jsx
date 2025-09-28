// Entry point for React web app (buyers/marketplace)
import React, { useEffect, useState } from 'react';

function App() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const [produce, setProduce] = useState([]);
  const [groups, setGroups] = useState([]);

  const fetchPrice = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/price/current?crop=Wheat&mandi=Delhi');
      const data = await res.json();
      setPrice(data.price);
    } catch (err) {
      setPrice('Error fetching price');
    }
    setLoading(false);
  };

  const fetchWeather = async () => {
    try {
      const res = await fetch('http://localhost:8001/weather/forecast?location=Delhi');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setWeather([]);
    }
  };

  const fetchProduce = async () => {
    try {
      const res = await fetch('http://localhost:8002/produce/all');
      const data = await res.json();
      setProduce(data);
    } catch (err) {
      setProduce([]);
    }
  };

  const fetchGroups = async () => {
    try {
      const res = await fetch('http://localhost:8003/group/all');
      const data = await res.json();
      setGroups(data);
    } catch (err) {
      setGroups([]);
    }
  };

  useEffect(() => {
    fetchPrice();
    fetchWeather();
    fetchProduce();
    fetchGroups();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Farmer Web Dashboard</h1>
      <div className="mb-2">Current Wheat Price (Delhi): {loading ? 'Loading...' : price}</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4" onClick={fetchPrice}>Refresh Price</button>

      <div className="mb-4 w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-2">Weather Forecast (Delhi)</h2>
        <ul className="bg-white p-4 rounded shadow">
          {weather.map((w, idx) => (
            <li key={idx} className="mb-1">{w.date}: {w.event} ({w.temperature}°C, {w.rainfall}mm)</li>
          ))}
        </ul>
      </div>

      <div className="mb-4 w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-2">Marketplace Produce Listings</h2>
        <ul className="bg-white p-4 rounded shadow">
          {produce.map((p) => (
            <li key={p.id} className="mb-1">{p.crop} - {p.quantity}kg @ ₹{p.price} (Seller: {p.seller})</li>
          ))}
        </ul>
      </div>

      <div className="mb-4 w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-2">Cooperative Group Listings</h2>
        <ul className="bg-white p-4 rounded shadow">
          {groups.map((g) => (
            <li key={g.id} className="mb-1">{g.village}: {g.crop} - {g.quantity}kg @ ₹{g.price}</li>
          ))}
        </ul>
      </div>

      {/* TODO: Add dashboard modules, authentication, marketplace features */}
    </div>
  );
}

export default App;
