
const Sidebar = ({ wantToCook, handlePrepare, prepare, totalTime, totalCalories }) => {
    
    return (
        <div className="w-2/4 p-8 rounded-2xl border border-gray-300 bg-white shadow-md">
            <div className="mb-8">
                <h2 className="text-center text-2xl font-semibold mb-4">Want to cook: {wantToCook.length}</h2>
            <hr className="mb-6 border-[#282828]" />
            <table className="table-fixed w-full text-left">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-left text-gray-700">
                    {wantToCook.map((recipe, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td><button onClick={()=> handlePrepare(recipe.recipe_id)} className="btn bg-[#0BE58A] font-medium text-black px-5 py-2.5 rounded-full cursor-pointer">Prepare</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div>
                <h2 className="text-center text-2xl font-semibold mb-4">Currently cooking: {prepare.length}</h2>
            <hr className="mb-6 border-[#282828]" />
            <table className="table-fixed w-full text-left">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {
                        prepare.map((recipe, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="mt-6 flex justify-between items-center">
                <h2 className="text-center text-2xl font-semibold mt-6">Total Time: {totalTime} minutes</h2>
                <h2 className="text-center text-2xl font-semibold">Total Calories: {totalCalories} calories</h2>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;