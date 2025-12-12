import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header" style={{
            backgroundImage: "linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            position: 'relative'
        }}>
            {/* Top Navigation Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 40px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(5px)'
            }}>
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/logo-hero.png" alt="OSP" style={{ width: '60px', objectFit: 'contain' }} />
                </div>

                {/* Center: Navigation */}
                <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <ul style={{ display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
                        <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Home</a></li>
                        <li><a href="#services" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Services</a></li>
                        <li><a href="#about" style={{ fontSize: '1.1rem', fontWeight: '500' }}>About Us</a></li>
                    </ul>
                </nav>

                {/* Right: WhatsApp Contact */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaWhatsapp style={{ fontSize: '1.2rem', color: '#25D366' }} />
                    <div style={{ textAlign: 'right', lineHeight: '1.2' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Contact Us</span>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>+91 9823 10 11 12</span>
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="container" style={{ padding: '100px 20px 140px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                    Reliable, Affordable Cloud Services<br />for UK & EU Small Businesses
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                    End-to-end Azure, AWS & Microsoft 365 Management for SMBs
                </p>
                <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
                    Get Free Assessment
                </a>
            </div>
        </header>
    )
}

export default Header
