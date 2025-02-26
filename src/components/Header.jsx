import './componentsStyle/Header.css';
import Logo from '../img/Logo.svg';
import cart from '../img/cart.svg';
import Search from '../img/Search.svg';

export default function Header() {
    return (
        <section className='header-bg'>
            <div className='wrapper header'>
                <a href="#"><img src={Logo} alt="logo" /></a>
                <nav className='header-links'>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                </nav>
                <div className='header-right'>
                    <div className='header-search'>
                        Search
                        <img src={Search} alt="search icon" />


                    </div>
                    <a href="#"><img src={cart} alt="cart icon" />3</a>
                </div>
            </div>

        </section>
    );
}
