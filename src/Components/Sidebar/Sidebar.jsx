
const Sidebar = () => {
    return (
        <div className="w-2/4 p-8 rounded-2xl border border-gray-300 bg-white shadow-md">
            <div className="mb-8">
                <h2 className="text-center text-2xl font-semibold mb-4">Want to cook: 01</h2>
            <hr className="mb-6 border-[#282828]" />
            <table class="table-fixed w-full text-left">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody className="text-left text-gray-700">
                    <tr>
                    <td>The Sliding</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td><button className="btn cursor-pointer px-5 py-2.5 bg-green-600 rounded-full mb-4">Prepare</button></td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    <td><button className="btn cursor-pointer px-5 py-2.5 bg-green-600 rounded-full mb-4">Prepare</button></td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    <td><button className="btn cursor-pointer px-5 py-2.5 bg-green-600 rounded-full mb-4">Prepare</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div>
                <h2 className="text-center text-2xl font-semibold mb-4">Currently cooking: 02</h2>
            <hr className="mb-6 border-[#282828]" />
            <table class="table-fixed w-full text-left">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    <tr>
                    <td>The Sliding</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Sidebar;