const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center pt-4 pb-4">
            <div><h2>X Chef Dine</h2></div>
            <div>
                <ul className="inline-flex space-x-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Search</a></li>
                </ul>
            </div>
            <div className="space-x-2">
                <input className="bg-slate-200 rounded-3xl p-2 outline-0" type="text" placeholder="Search recipes..." />
                <button className="btn cursor-pointer">Search</button>
            </div>
        </div>
    );
};

export default Header;