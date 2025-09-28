// Entry point for React Native Farmer App
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const App = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <SafeAreaView>
      <Text>Welcome to AI-Powered Farmer App</Text>
      <Text>Current Wheat Price (Delhi): {loading ? 'Loading...' : price}</Text>
      <Button title="Refresh Price" onPress={fetchPrice} />
      {/* TODO: Add navigation, localization, voice input, modules */}
    </SafeAreaView>
  );
};

export default App;
