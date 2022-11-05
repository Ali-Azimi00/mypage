import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import DemoPage from './Components/DemoPage'


function App() {
  
  return (
  <React.Fragment>
    
    <BrowserRouter>
  
      <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/CustomPage" element={<DemoPage/>}></Route>
      </Routes>   

      <Routes>
          {/* <Route path="/btn" element={<BtnPage/>}></Route> */}
      </Routes>
    
    </BrowserRouter>

  </React.Fragment>
    
  );
}

export default App;
