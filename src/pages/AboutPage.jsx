import React from 'react'

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="section-title">About OSP Services Ltd</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '60px', lineHeight: '1.8' }}>
                            We are a dedicated team of cloud professionals on a mission to bring enterprise-grade cloud expertise to Small and Medium Businesses (SMBs) across the UK and Europe.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', marginBottom: '80px' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <img src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80" alt="Our Team" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ marginBottom: '20px', color: 'var(--dark-blue)' }}>Our Philosophy</h2>
                            <p style={{ marginBottom: '20px', lineHeight: '1.7', color: 'var(--text-light)' }}>
                                At OSP Services, we believe that powerful cloud technology shouldn't be the exclusive domain of large corporations. We understand the unique challenges faced by SMBs—budget constraints, limited in-house IT resources, and the need for agility.
                            </p>
                            <p style={{ lineHeight: '1.7', color: 'var(--text-light)' }}>
                                That's why we've designed our managed services to be modular, scalable, and affordable. We act as an extension of your team, providing the strategic guidance and technical muscle you need to grow without the overhead.
                            </p>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-light)', padding: '80px 40px', borderRadius: '20px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ marginBottom: '20px' }}>Driven by Core Values</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                                Our culture is built on a foundation of trust, excellence, and continuous improvement.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            <div className="card" style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80" alt="Customer Centric" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} />
                                <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Customer-Centric</h3>
                                <p style={{ color: 'var(--text-light)' }}>Your success is our success. We prioritize your business goals in every technical decision we make.</p>
                            </div>
                            <div className="card" style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="Integrity" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} />
                                <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Integrity & Security</h3>
                                <p style={{ color: 'var(--text-light)' }}>We treat your data with the utmost care, adhering to strict security protocols and transparency.</p>
                            </div>
                            <div className="card" style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Innovation" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} />
                                <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Innovation</h3>
                                <p style={{ color: 'var(--text-light)' }}>We constantly upskill to bring the latest cloud advancements to your infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
