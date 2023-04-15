import {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Nav.css'
import '../Header/header.css'
import { Link } from 'react-router-dom';

function Nav() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
     return (
        <div className='top'>
            <nav ref={navRef}>
                <div className='list'>
                    <Link to="/">Swap</Link>
                </div>
                <div className='list'>
                    <Link to="/liquidity">Liquidity</Link>
                </div>
                <div className='list'>
                    <Link to="/vest">Vest</Link>
                </div>
                <div className='list'>
                    <Link to="/vote">Vote</Link>
                </div>
                <div className='list'>
                    <Link to="/rewards">Rewards</Link>
                </div>
                <div className='list'>
                    <Link to="/bribe">Bribe</Link>
                </div>
                <div className='list'>
                    <Link to="/presale">Presale</Link>
                </div>
                <div className='list'>
                    <Link href="">Docs</Link>
                </div>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes/>

                </button>
                <div className="mobile-tag">
                </div>
            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Nav;
