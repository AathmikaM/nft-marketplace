import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CollectionDetail from './CollectionDetail';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:id" element={<CollectionDetail />} />
          <Route path="/checkout" element={<Checkout cartItems={[]} total={0} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
