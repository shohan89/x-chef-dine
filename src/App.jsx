import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [prepare, setPrepare] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  // Function to handle adding a recipe to the "Want to Cook" list
  // This function will be called when the user clicks the "Want to Cook" button
  const handleWantToCook = recipe => {
    setWantToCook(prevWantToCook => [...prevWantToCook, recipe]);
  }

  // Function to handle preparing a recipe
  // This function will be called when the user clicks the "Prepare" button
  const handlePrepare = recipeId => {
    // Find the recipe in the wantToCook list
    const recipeToPrepare = wantToCook.find(recipe => recipe.recipe_id === recipeId);
    // If the recipe is found, move it to the prepare list
    if (recipeToPrepare) {
      // Add the recipe to the prepare list
      const nextPrepare = [...prepare, recipeToPrepare];
      setPrepare(nextPrepare);
      // Remove the recipe from the wantToCook list
      setWantToCook(prevWantToCook => prevWantToCook.filter(recipe => recipe.recipe_id !== recipeId));
      // Calculate total time and calories for the next prepare list
      const totalTime = nextPrepare.reduce((total, recipe) => total + parseInt(recipe.preparing_time), 0);
      const totalCalories = nextPrepare.reduce((total, recipe) => total + parseInt(recipe.calories), 0);
      setTotalTime(totalTime);
      setTotalCalories(totalCalories);
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
        totalTime={totalTime}
        totalCalories={totalCalories}
         />
      </div>
    </>
  )
}

export default App
