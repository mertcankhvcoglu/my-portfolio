import React from 'react'
import './css/Contact.css'

const Contact = () => {
    return (
        <section className='contact-container'>

            <h2 className='section-title'>İletişime Geçin</h2>

            <div className='contact-wrapper'>
                <p className='contact-desc'>
                    Yeni fırsatlara ve işbirliklerine açığım. Aklınızda bir proje varsa
                    veya sadece merhaba demek isterseniz formu doldurmaktan çekinmeyin!
                </p>

                <form className='contact-form'>
                    <input type='text' placeholder='Adınız' className='contact-input' />
                    <input type='text' placeholder='E-mail adresiniz' className='contact-input' />
                    <textarea
                        placeholder='Mesajınız'
                        rows="5"
                        className='contact-input contact-textarea'
                    />

                    <button type='submit' className='contact-btn'>Gönder (WiP)</button>
                </form>

            </div>

        </section>
    )
}
export default Contact