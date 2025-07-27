import { AiOutlineFire } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name, image, description, preparing_time, calories, ingredients } = recipe;
    console.log("🚀 ~ Recipe ~ ingredients:", ingredients)
    
    return (
        <div className="border border-gray-300 p-6 rounded-3xl shadow-md mb-4">
            <img className="rounded-2xl" src={image} alt={recipe_name} />
            <div className="text-left mt-6 mb-6 space-y-4">
                <h2 className="text-[20px] font-semibold">{recipe_name}</h2>
                <p>{description}</p>
            </div>
            <hr className="mb-6 border-[#2828283a]" />
            <h2 className="text-[18px] font-medium mb-4">Ingredients: {ingredients.length}</h2>
            {
                    ingredients.map((ingredient, index) => (
                        <div className="pl-6" key={index}>
                                <ul>
                                    <li key={index} className="text-gray-700">{index +1}. {ingredient}</li>
                                </ul>
                        </div>
                    ))
                }
            <hr className="mb-6 mt-6 border-[#2828283a]" />
            <div className="flex justify-between items-start mb-6">
                <p className="text-gray-700 inline-flex gap-2.5 items-center"><IoTimeOutline /> {preparing_time}</p>
                <p className="text-gray-700 inline-flex gap-2.5 items-center"><AiOutlineFire /> {calories}</p>
            </div>
            <button onClick={()=> handleWantToCook(recipe)} className="bg-[#0BE58A] px-6 py-3.5 rounded-full cursor-pointer text-[18px] font-medium">Want to Cook</button>
        </div>
    );
};

export default Recipe;