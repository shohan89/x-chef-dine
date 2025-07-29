import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center pt-4 pb-4">
            <div><h2 className='text-4xl font-bold'>X Chef Dine</h2></div>
            <div>
                <ul className="inline-flex space-x-12">
                    <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#">Home</a></li>
                    <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#">Recipes</a></li>
                    <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#">About</a></li>
                    <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#">Search</a></li>
                </ul>
            </div>
            <div className="space-x-2 flex items-center">
                <input className="bg-slate-200 rounded-3xl p-2 outline-0" type="text" placeholder="Search recipes..." />
                <div className="bg-green-600 p-2 rounded-full">
                    <FaRegUserCircle className="text-3xl text-gray-700 cursor-pointer rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;