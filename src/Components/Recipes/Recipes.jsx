import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleWantToCook}) => {
    const [recipies, setRecipes] = useState([]);
    // Fetch recipes from an API or define them here
    useEffect(()=> {
        try{
            fetch('recipe.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
        } catch(error) {
            console.error("Error fetching recipes:", error);
        }
    },[]);
    return (
        <div className="w-3/4">
            <h2 className="text-2xl font-bold">This is recipes: {recipies.length}</h2>
            {
                recipies.map(recipe => <Recipe 
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}
                     />)
            }
        </div>
    );
};

export default Recipes;