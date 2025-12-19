import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path

    const linkClass = (path) =>
        `nav-link ${isActive(path) ? 'active' : ''}`

    return (
        <header className={`glass-header glass-header-premium ${scrolled ? 'scrolled' : ''}`}>
            <style>{`
                .glass-header.scrolled {
                    padding: 5px 0;
                    background: rgba(255, 255, 255, 0.9) !important;
                }
                .glass-header .header-logo {
                    transition: height 0.3s ease;
                }
                .glass-header.scrolled .header-logo {
                    height: 60px !important;
                }
                .nav-link {
                    position: relative;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                }
                .nav-link:hover, .nav-link.active {
                    opacity: 1;
                    color: var(--primary-blue);
                    background: transparent;
                }
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 3px;
                    background: var(--primary-blue);
                    border-radius: 10px;
                    box-shadow: 0 0 10px var(--primary-blue);
                }
            `}</style>
            {/* Top Navigation Bar */}
            <div className="header-container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: scrolled ? '10px 40px' : '15px 40px',
                transition: 'padding 0.3s ease'
            }}>
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <img src="/osp-logo-new.jpg" alt="OSP" className="header-logo animate-slide-in-left" style={{ height: scrolled ? '60px' : '90px' }} />
                    </Link>
                </div>

                {/* Right: Navigation & CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="header-content">
                    <nav>
                        <ul className="nav-list" style={{ display: 'flex', gap: '10px', margin: 0, padding: 0 }}>
                            <li><Link to="/" className={`animate-fade-in delay-100 ${linkClass('/')}`}>Home</Link></li>
                            <li><Link to="/services" className={`animate-fade-in delay-200 ${linkClass('/services')}`}>Services</Link></li>
                            <li><Link to="/about" className={`animate-fade-in delay-300 ${linkClass('/about')}`}>About Us</Link></li>
                            <li><Link to="/contact" className={`animate-fade-in delay-400 ${linkClass('/contact')}`}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/contact" className="header-cta animate-zoom-in delay-500 btn-premium">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
