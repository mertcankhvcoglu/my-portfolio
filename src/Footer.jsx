import React from 'react'
import './css/Footer.css'

import githubLogo from './assets/images/github-mark.svg'
import inLogo from './assets/images/in-logo.svg'

const Footer = () => {

    // const currentYear = new Date().getFullYear; //yıl çek

    return (
        <footer className='footer'>
            <div className='footer-container'>

                <p className='footer-text'> © 2025 Mertcan Kahvecioğlu. Tüm hakları saklıdır.</p>

                <div className='footer-socials'>
                    <a href="https://github.com/mertcankhvcoglu" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="GitHub" className='footer-icon'></img>
                    </a>

                    <a href="https://www.linkedin.com/in/mertcan-kahvecioglu/" target="_blank" rel="noreferrer">
                        <img src={inLogo} alt="LinkedIn" className='footer-icon'></img>
                    </a>

                </div>

            </div>
        </footer>

    )
}
export default Footer