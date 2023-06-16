import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import UnAuthRoutes from './navigation/UnAuthRoutes';
import AuthRoutes from './navigation/AuthRoutes';
import store from './redux/setup/store';
import Home from './pages/home';

function App() {
  const [isSigning] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
