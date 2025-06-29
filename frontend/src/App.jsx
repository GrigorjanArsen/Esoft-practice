import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ads from './components/Ads';
import AddAd from './components/AddAd';


function App() {
  const [ads, setAds] = useState([]);

  const handleAddAd = (newAd) => {
    setAds(prevAds => [newAd, ...prevAds]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads ads={ads} />} />
        <Route path="/add" element={<AddAd onAdd={handleAddAd} />} />
      </Routes>
    </Router>
  );
}

export default App;
