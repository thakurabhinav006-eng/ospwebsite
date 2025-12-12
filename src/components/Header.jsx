import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const isActive = (path) => location.pathname === path

    const linkClass = (path) =>
        `nav-link ${isActive(path) ? 'active' : ''}`

    return (
        <header className="glass-header">
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

                {/* Right: Navigation & CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="header-content">
                    <nav>
                        <ul className="nav-list" style={{ display: 'flex', gap: '10px', margin: 0, padding: 0 }}>
                            <li><Link to="/" className={linkClass('/')}>Home</Link></li>
                            <li><Link to="/services" className={linkClass('/services')}>Services</Link></li>
                            <li><Link to="/about" className={linkClass('/about')}>About Us</Link></li>
                            <li><Link to="/contact" className={linkClass('/contact')}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/contact" className="header-cta">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
