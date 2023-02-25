import './App.css';
import React from 'react';
import GalleryProvider from './Context/GalleryContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Search from './components/Search';


function App() {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' component={Gallery} />
          <Route path='/mountain' render={() => <Gallery category="mountain" />} />
          <Route path='/beaches' render={() => <Gallery category="beaches" />} />
          <Route path='/birds' render={() => <Gallery category="birds" />} />
          <Route path='/food' render={() => <Gallery category="food" />} />
          <Route path='/mountain' component={Search} />
        </Routes>
      </BrowserRouter>
    </GalleryProvider>
  );
}

export default App;
