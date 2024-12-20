import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
function App() {
 

  return (
   <>
      <LuckyN numDice={2} goal={5}/>
     <LuckyN numDice={4} goal={12}/>
     <LuckyN numDice={3} goal={9}/>
      </>
  )
}

export default App
