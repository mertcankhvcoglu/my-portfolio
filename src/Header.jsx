import React, { useState } from 'react'
import './css/Header.css'
// import MkLogo from './assets/images/mk_logo.jsx'
import MkLogo from './assets/images/mk_logo.svg?react'
import githubLogo from './assets/images/github-mark.svg'
import inLogo from './assets/images/in-logo.svg'

function Header() {

    // 2. Menünün açık/kağalı durumunu tutacak değişken
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // menü aç kapa fonksiyonu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //Linke tıklanınca menüyü kapatan fonksiyon
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className='header'>

            <div className="header-left">
                <MkLogo className='header_mk' />
                <div className='title'>Mertcan Kahvecioğlu</div>
            </div>


            <div className='header-right'>
                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {/* Navigation links */}
                    <a href="#home" className='nav-item'>Ana Sayfa</a>
                    <a href="#projects" className='nav-item'>Projeler</a>
                    <a href="#skills" className='nav-item'>Yetenekler</a>
                    <a href="#contact" className='nav-item'>İletişim</a>
                </nav>

                <div className='header-socials'>
                    <a href="https://github.com/mertcankhvcoglu" target='_blank' rel="noreferrer" className='social-btn'>
                        <img src={githubLogo} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/mertcan-kahvecioglu/" target='_blank' rel="noreferrer" className='social-btn'>
                        <img src={inLogo} alt="LinkedIn" />
                    </a>

                </div>

                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </div>

        </div>
    )
}

export default Header