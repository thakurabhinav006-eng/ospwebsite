import React from 'react'

const Header = () => {
    return (
        <header className="header" style={{
            backgroundImage: "linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '120px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <div className="container">
                <img src="/logo-hero.png" alt="OSP Services Ltd" style={{ width: '180px', margin: '30px auto', display: 'block', objectFit: 'contain' }} />
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', maxWidth: '800px' }}>
                    Reliable, Affordable Cloud Services for UK & EU Small Businesses
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px', maxWidth: '600px' }}>
                    End-to-end Azure, AWS & Microsoft 365 Management for SMBs
                </p>
                <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>
                    Get Free Assessment
                </a>
            </div>
        </header>
    )
}

export default Header
