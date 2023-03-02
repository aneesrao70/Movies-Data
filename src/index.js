import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Movies from './Movies';
import moviesData from './moviesData.json'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='boxes'>
    {
      moviesData.map((elem)=>{
        return(
          <Movies 
          name = {elem.Title}
          year = {elem.Year}
          imdb = {elem.imdbID }
          img = {elem.Poster}
          />
        )
      })
    }
    </div>
    
  </React.StrictMode>
);

