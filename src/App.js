import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/setup/store';
import About from './pages/About';
import IZNavBar from './components/Header/IZNavBar'
import Copyright from './components/Footer/Footer'
import Home from './pages/Home';
import Service from './pages/Services';

function App() {
  const [isSigning] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <IZNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/software-consulting' element={<Service/>}/>
      </Routes>
      <Copyright/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
