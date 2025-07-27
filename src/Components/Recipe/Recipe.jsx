
const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name } = recipe;
    return (
        <div>
            <h2>{recipe_name}</h2>
            <button onClick={()=> handleWantToCook(recipe)} className="bg-[#0BE58A] px-6 py-3.5 rounded-full cursor-pointer text-[18px] font-medium">Want to Cook</button>
        </div>
    );
};

export default Recipe;