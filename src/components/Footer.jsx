import React from 'react'
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--dark-blue)',
            color: 'white',
            padding: '80px 0 30px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Map Background Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.05',
                pointerEvents: 'none',
                filter: 'invert(1)'
            }}></div>

            {/* Pulsing Dots on Map (Simulated positions) */}
            <div className="map-dot" style={{ top: '30%', left: '48%' }}></div> {/* UK/Europe */}
            <div className="map-dot" style={{ top: '35%', left: '49%', animationDelay: '0.5s' }}></div> {/* Europe */}
            <div className="map-dot" style={{ top: '45%', left: '68%', animationDelay: '1s' }}></div> {/* India */}
            <div className="map-dot" style={{ top: '38%', left: '25%', animationDelay: '1.5s' }}></div> {/* US */}

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 'bold' }}>OSP Services Ltd</h3>
                <p style={{ opacity: '0.8', marginBottom: '30px', fontSize: '1.1rem' }}>Your Trusted Cloud Partner for SMBs</p>

                {/* Social Icons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                    <a href="https://wa.me/919823101112" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                    fontSize: '0.9rem',
                    opacity: '0.7',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    <span>Azure</span>
                    <span>•</span>
                    <span>AWS</span>
                    <span>•</span>
                    <span>Cloud Migration</span>
                    <span>•</span>
                    <span>Security</span>
                    <span>•</span>
                    <span>Support</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9rem', opacity: '0.5' }}>
                    &copy; {new Date().getFullYear()} OSP-Services. Designed with ❤️ for SMBs in UK & Europe.
                </div>
            </div>
        </footer>
    )
}

export default Footer
