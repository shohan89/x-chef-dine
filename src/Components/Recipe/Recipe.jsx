
const Recipe = ({ recipe }) => {
    const { recipe_name } = recipe;
    return (
        <div>
            <h2>{recipe_name}</h2>
        </div>
    );
};

export default Recipe;