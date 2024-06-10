import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import Header from './common/Header';
import Navigation from './route/Navigation';
import Footer from './common/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navigation/> */}
      <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
