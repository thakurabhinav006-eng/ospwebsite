import React from 'react'

const Footer = () => {
    return (
        <footer style={{ background: 'var(--dark-blue)', color: 'white', padding: '60px 0 20px', textAlign: 'center' }}>
            <div className="container">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>OSP Services Ltd</h3>
                <p style={{ opacity: '0.8', marginBottom: '20px' }}>Your Trusted Cloud Partner for SMBs</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <span>Azure</span>
                    <span>AWS</span>
                    <span>Cloud Migration</span>
                    <span>Security</span>
                    <span>Support</span>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9rem', opacity: '0.6' }}>
                    &copy; {new Date().getFullYear()} OSP-Services. Designed with ❤️ for SMBs in UK & Europe.
                </div>
            </div>
        </footer>
    )
}

export default Footer
