import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainInputs from './components/MainInputs';

import './css/app.scss'; 

function App() {
  return (
    <div className="App">
      <Header />
      <MainInputs />
      <Footer />
    </div>
  );
}

export default App;
