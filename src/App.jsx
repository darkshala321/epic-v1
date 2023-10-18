import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import MainSlider from './components/slider/MainSlider'
import Gameonsale from './components/game-on-sales/Gameonsale'
import Freegame from './components/freegame/Freegame'

function App() {

  return (
    <div className='container'>
      <Header />
      <MainSlider />
      <Gameonsale />
      <Freegame />
      </div>
  )
}

export default App
