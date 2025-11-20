import React from 'react'
import myPhoto from './assets/images/my_photo.png'
import './css/AboutMe.css'

function AboutMe() {
    return (
        <section className='about-container'>

            {/* Hakkımda yazısı sol taraf */}
            <div className='about-text'>
                <h1 className='about-title'>Mertcan Kahvecioğlu</h1>
                <p className='about-description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda odio nostrum eveniet. Laudantium corporis nemo quasi vero, neque pariatur non!
                </p>
                <button className='about-btn'>GitHub sayfam</button>
            </div>

            {/* Sağ taraf yuvarlak portre */}
            <div className='about-img-box'>
                <img src={myPhoto} className='about-img'></img>
            </div>


        </section>
    )
}

export default AboutMe