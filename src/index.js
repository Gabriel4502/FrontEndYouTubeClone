import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './contexts/context';
import { UserStorage } from './contexts/userContext';
import { VideoStorage } from './contexts/videoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStorage>
      <MenuProvider>
        <VideoStorage>
        <App />
        </VideoStorage>
      </MenuProvider>
    </UserStorage>
  </React.StrictMode>
);


