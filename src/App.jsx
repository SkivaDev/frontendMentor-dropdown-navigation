import { useState } from 'react';
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Section from './components/section/Section'

function App() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Navbar isActive={isActive} handleClick={handleClick}/>
      <Section/>
      <div class={`overflow ${isActive ? 'active-menu' : null}`}></div>
    </div>
  )
}

export default App
