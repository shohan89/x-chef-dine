import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [prepare, setPrepare] = useState([]);

  const handleWantToCook = recipe => {
    setWantToCook(prevWantToCook => [...prevWantToCook, recipe]);
  }

  const handlePrepare = recipeId => {
    // Find the recipe in the wantToCook list
    const recipeToPrepare = wantToCook.find(recipe => recipe.recipe_id === recipeId);
    // If the recipe is found, move it to the prepare list
    if (recipeToPrepare) {
      // Add the recipe to the prepare list
      setPrepare(prevPrepare => [...prevPrepare, recipeToPrepare]);
      // Remove the recipe from the wantToCook list
      setWantToCook(prevWantToCook => prevWantToCook.filter(recipe => recipe.recipe_id !== recipeId));
    }
  }

  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto flex space-x-4 mt-12 mb-12">
        <Recipes handleWantToCook={handleWantToCook} />
        <Sidebar 
        wantToCook={wantToCook}
        handlePrepare={handlePrepare}
        prepare={prepare}
         />
      </div>
    </>
  )
}

export default App
