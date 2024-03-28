import React from 'react';
import PokedexBody from './components/PokedexBody';
import PokedexHeader from './components/PokedexHeader';
import './App.css';



const App:React.FC = () => {

  return (
    <>
      <PokedexHeader/>
      <PokedexBody/>
    </>
  )
}

export default App
