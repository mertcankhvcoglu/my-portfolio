import React from 'react'
import './css/Header.css'
// import MkLogo from './assets/images/mk_logo.jsx'
import MkLogo from './assets/images/mk_logo.svg?react'

function Header() {
    return (
        <div className='header'>
            <MkLogo className='header_mk' />
            <div className='title'>Mertcan Kahvecioğlu</div>
        </div>
    )
}

export default Header