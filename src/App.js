import React from 'react'
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Dreamline_Worksheet from './Pages/Dreamline/Dreamline_Worksheet';





function App() {
  return (
    <div className="App">
      {/* replace the below H2 element with a proper header */}
      <Header/>
      <div>HOME</div>
      <Footer/>
    </div>
  );
}

export default App;
