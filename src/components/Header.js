import foodie from '../assets/foodie.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-2 px-4 shadow-md">
            <div>
                <Link to="/">
                    <img
                        className="w-20"
                        src={foodie}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div>
                <ul className="flex space-x-6 text-lg">
                    <li>
                        <Link to="/about" className="hover:text-red-500 transition duration-300">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-red-500 transition duration-300">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-red-500 transition duration-300">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;