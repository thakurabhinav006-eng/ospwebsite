import React from 'react'
import Contact from '../components/Contact'

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div style={{ background: 'var(--dark-blue)', color: 'white', padding: '60px 0 40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Get in Touch</h1>
                <p style={{ opacity: 0.8 }}>We'd love to hear about your cloud challenges.</p>
            </div>
            <Contact />
        </div>
    )
}

export default ContactPage
