import React from 'react';
import ReactDOM from 'react-dom/client';
import ListMovies from './components/ListMovies.jsx';
import Title from './components/Title.jsx';
import BellowSection from "./components/BellowSection.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Title />
      <ListMovies />
      <BellowSection />
    </div>
  </React.StrictMode>
);


