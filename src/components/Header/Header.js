import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const Header = (props) => {

    useEffect(()=>{
        const burger = document.querySelector('.menu-icon');
        const menu = document.querySelector('.menu');
        const body = document.body

        if (burger && menu) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                menu.classList.toggle('_active');
                body.classList.toggle('_lock');
            })
        }
    })

    const closeBtnHelper = (e) => {
        if (e.target.text !== undefined) {
            const burger = document.querySelector('.menu-icon');
            burger.click();
        }
    }

    return <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <div className="header__logo-name">Vehicle Observer</div>
            </div>
            <div className="header__navigation">
                <nav className="header__menu menu">
                    <ul onClick={(e)=>{closeBtnHelper(e)}} className="menu__body">
                        <li><NavLink className="header__link" to="/cars">cars</NavLink></li>
                        <li><NavLink className="header__link" to="/moto">motorcycles</NavLink></li>
                        <li><NavLink className="header__link" to="/helicopters">helicopters</NavLink></li>
                        <li><NavLink className="header__link" to="/aircraft">aircraft</NavLink></li>
                    </ul>
                </nav>
                <div className="menu-icon">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;

