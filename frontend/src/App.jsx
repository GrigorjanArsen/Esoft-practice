import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ads from './components/Ads';
import AddAd from './components/AddAd';
import EditAdForm from './components/EditAd';
import { adsStore } from './store/AdsStore'; // импорт store

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/add" element={<AddAd />} />
        <Route path="/edit/:id" element={<EditAdForm />} />
      </Routes>
    </Router>
  );
}

export default App;
