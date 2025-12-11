import React from 'react'

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title">About OSP Services</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
                        We help UK & EU SMEs manage Azure, AWS & Microsoft 365 with reliability and cost efficiency.
                        Our mission is to make enterprise-grade cloud expertise affordable for small businesses,
                        ensuring your digital infrastructure is secure, scalable, and optimized.
                    </p>
                </div>
                <img className="full" src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80" alt="Our Team" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
            </div>
        </section>
    )
}

export default About
