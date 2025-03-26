import './componentsStyle/Header.css';
import Logo from '../img/Logo.svg';
import cart from '../img/cart.svg';
import Search from '../img/Search.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <section className='header-bg'>
            <div className='wrapper header'>
                <Link to='/' ><img src={Logo} alt="logo" /></Link>
                <nav className='header-links'>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/products' end>Products</NavLink>
                    <NavLink to='/about' end>About us</NavLink>
                    <NavLink to='/contact' end>Contact us</NavLink>
                </nav>
                <div className='header-right'>
                    <div className='header-search'>
                        Search
                        <img src={Search} alt="search icon" />


                    </div>
                    <a href="#"><img src={cart} alt="cart icon" /> 3</a>
                </div>
            </div>

        </section>
    );
}
