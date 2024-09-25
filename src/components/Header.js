import foodie from '../assets/foodie.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" >
                    <img
                    className="logo"
                    src={foodie}
                />
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;