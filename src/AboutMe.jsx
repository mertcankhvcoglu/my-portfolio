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
                    Full-Stack Yazılım Geliştirici ve UX-UI Tutkunu. Bunlarla birlikte derin öğrenme ve görüntü işleme konusunda bir bitirme projesi, bilgisayarlı görü ile nesne tespitine yönelik bir staj projesi geliştirdim. Aynı zamanda hobilerim kapsamında Unity ile oyun prototipleri geliştiriyorum.              </p>
                <a href="./assets/other/mertcan-kahvecioglu-cv-tur.pdf" download="./assets/other/mertcan-kahvecioglu-cv-tur.pdf">
                    <button className='about-btn'>CV İndir</button>
                </a>

            </div>

            {/* Sağ taraf yuvarlak portre */}
            <div className='about-img-box'>
                <img src={myPhoto} className='about-img'></img>
            </div>


        </section>
    )
}

export default AboutMe