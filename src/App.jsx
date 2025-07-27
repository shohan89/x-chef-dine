import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = recipe => {
    setWantToCook(prevWantToCook => [...prevWantToCook, recipe]);
  }

  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto flex space-x-4 mt-12 mb-12">
        <Recipes handleWantToCook={handleWantToCook} />
        <Sidebar wantToCook={wantToCook} />
      </div>
    </>
  )
}

export default App
