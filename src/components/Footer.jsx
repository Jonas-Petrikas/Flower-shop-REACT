import '../components/componentsStyle/Footer.css';

import fb from '../img/Social/facebook.svg';
import ig from '../img/Social/instagram.svg';
import lin from '../img/Social/linkedin.svg';
import tw from '../img/Social/twitter.svg';
import yt from '../img/Social/youtube.svg';

export default function Footer({ isHomePage }) {
    return (
        <footer className={isHomePage ? '' : 'light-bg'}>
            <div className='second-menu wrapper'>
                <nav className='footer-menu'>
                    <a href="">Products</a>
                    <a href="">Returns</a>
                    <a href="">FAQ</a>
                    <a href="">Shipping</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                </nav>
                <nav className='footer-social'>
                    <a href=""><img src={yt} alt="x" /></a>
                    <a href=""><img src={fb} alt="Facebook" /></a>
                    <a href=""><img src={tw} alt="Twitter" /></a>
                    <a href=""><img src={ig} alt="Instagram" /></a>
                    <a href=""><img src={lin} alt="LinkedIn" /></a>
                </nav>
            </div>
            <div className="green-bg footer-banner">
                <div className='wrapper'>
                    Copyright Green thumb. All Rights Reserved
                </div>


            </div>
        </footer>
    )
}