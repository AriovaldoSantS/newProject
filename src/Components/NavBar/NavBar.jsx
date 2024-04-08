import { NavLink } from "react-router-dom"
import "./NavBar.css"
import carrinho from "../assets/car.png"




function NavBar() {


    return (
        <nav className="navBar">
            <div className="nav-container">
                <NavLink exact to='/home' className='nav-logo'>
                    Loja Sant Ana
                </NavLink>
            </div>

            <ul className="nav-menu">
                <li className="navItem">
                    <NavLink exact to='/home' activeClassName='active' className='navLinks'>
                        Home
                    </NavLink>
                </li>

                <li className="navItem">
                    <NavLink exact to='/categorias' activeClassName='active' className='navLinks'>
                        Categorias
                    </NavLink>
                </li>

                <li className="navItem">
                    <NavLink exact to='/contacts' activeClassName='active' className='navLinks'>
                        Contatos
                    </NavLink>
                </li>
            </ul>

            <img className='icon-cart' src={carrinho} alt="" />
            <span>0</span>


        </nav>

    )
}

export default NavBar