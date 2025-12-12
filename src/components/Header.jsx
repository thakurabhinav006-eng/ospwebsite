import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const isActive = (path) => location.pathname === path

    const linkStyle = (path) => ({
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'white',
        borderBottom: isActive(path) ? '2px solid white' : '2px solid transparent',
        paddingBottom: '4px'
    })

    return (
        <header className="header" style={{
            background: 'var(--dark-blue)',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            {/* Top Navigation Bar */}
            <div className="header-container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 40px',
            }}>
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" className="logo-frame">
                        <img src="/logo-hero.png" alt="OSP" style={{ width: '60px', objectFit: 'contain' }} />
                    </Link>
                </div>

                {/* Right: Navigation */}
                <nav style={{ display: 'flex' }}>
                    <ul className="nav-list" style={{ display: 'flex', gap: '40px', margin: 0, padding: 0 }}>
                        <li><Link to="/" style={linkStyle('/')}>Home</Link></li>
                        <li><Link to="/services" style={linkStyle('/services')}>Services</Link></li>
                        <li><Link to="/about" style={linkStyle('/about')}>About Us</Link></li>
                        <li><Link to="/contact" style={linkStyle('/contact')}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
