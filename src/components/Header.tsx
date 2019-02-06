import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/favorites">Favorites</Link>
        </li>
    </ul>
);

export default Header;