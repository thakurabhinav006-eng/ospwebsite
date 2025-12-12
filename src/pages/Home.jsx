import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                backgroundImage: "linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '120px 20px',
                textAlign: 'center',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Reliable, Affordable Cloud Services<br />for UK & EU Small Businesses
                    </h1>
                    <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                        End-to-end Azure, AWS & Microsoft 365 Management tailored for SMBs. Unlocking enterprise-grade tech at small business prices.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
                            Get Free Assessment
                        </Link>
                        <Link to="/services" className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px', background: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(5px)' }}>
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Your Path to Cloud Success</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '50px' }}>
                        <div className="text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--primary-blue)' }}>1️⃣</div>
                            <h3 style={{ marginBottom: '15px' }}>Assess</h3>
                            <p style={{ color: 'var(--text-light)' }}>We audit your current infrastructure to identify cost savings and security gaps.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--primary-blue)' }}>2️⃣</div>
                            <h3 style={{ marginBottom: '15px' }}>Migrate & Modernize</h3>
                            <p style={{ color: 'var(--text-light)' }}>Seamless transition of workloads with zero downtime strategies.</p>
                        </div>
                        <div className="text-center">
                            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--primary-blue)' }}>3️⃣</div>
                            <h3 style={{ marginBottom: '15px' }}>Manage & Optimize</h3>
                            <p style={{ color: 'var(--text-light)' }}>24/7 monitoring, automated patching, and continuous compliance checks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">Why Choose OSP Services?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Expert Support</h3>
                            <p>Certified professionals managing your cloud environment 24/7.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Cost Efficient</h3>
                            <p>Optimized tailored plans ensuring you only pay for what you use.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Secure by Design</h3>
                            <p>Security-first approach with zero-trust architecture and compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack / Trusted By */}
            <section className="section" style={{ borderTop: '1px solid #eee' }}>
                <div className="container text-center">
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', opacity: 0.6, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>Powered by World-Class Technology</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.6, fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <span>Microsoft Azure</span>
                        <span>AWS</span>
                        <span>Google Cloud</span>
                        <span>Terraform</span>
                        <span>Kubernetes</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
