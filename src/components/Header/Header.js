import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <NavLink className="header__logo-name" to="/">Vehicle Observer</NavLink>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li><NavLink className="header__link" to="/cars">cars</NavLink></li>
                    <li><NavLink className="header__link" to="/moto">motorcycles</NavLink></li>
                    <li><NavLink className="header__link" to="/helicopters">helicopters</NavLink></li>
                    <li><NavLink className="header__link" to="/aircraft">aircraft</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default Header;