import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import LuckyN from './LuckyN'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <LuckyN/>
     <LuckyN numDice={3} goal={9}/>
      </>
  )
}

export default App
