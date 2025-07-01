import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ads from './components/Ads';
import AddAd from './components/AddAd';
import EditAdForm from './components/EditAd'; // подключили компонент

function App() {
  const [ads, setAds] = useState([]);

  const handleAddAd = (newAd) => {
    setAds(prevAds => [newAd, ...prevAds]);
  };

  const handleUpdateAd = (updatedAd) => {
    setAds(prevAds =>
      prevAds.map(ad => (ad.id === updatedAd.id ? updatedAd : ad))
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads ads={ads} />} />
        <Route path="/add" element={<AddAd onAdd={handleAddAd} />} />
        <Route path="/edit/:id" element={<EditAdForm ads={ads} onUpdateAd={handleUpdateAd} />} />
      </Routes>
    </Router>
  );
}

export default App;
