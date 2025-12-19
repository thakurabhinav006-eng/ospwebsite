import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import RotatingText from '../components/RotatingText'
import WarpSpeedBg from '../components/WarpSpeedBg'
import assessIcon from '../assets/assess.png'
import migrateIcon from '../assets/migrate.png'
import manageIcon from '../assets/manage.png'
import supportIcon from '../assets/support.png'
import costIcon from '../assets/cost.png'
import secureIcon from '../assets/secure.png'

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="animate-aurora" style={{
                color: 'white',
                padding: '120px 20px',
                textAlign: 'center',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <WarpSpeedBg />
                {/* Tech Grid Overlay */}
                <div className="tech-grid"></div>

                <Reveal className="container" animation="animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="animate-fade-in-up delay-200" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1', letterSpacing: '-0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                        Reliable, <RotatingText words={["Affordable", "Secure", "Scalable", "Fast"]} /> Cloud Services<br />for UK & EU Small Businesses
                    </h1>
                    <p className="animate-fade-in-up delay-400" style={{ fontSize: '1.35rem', opacity: '0.9', marginBottom: '50px', maxWidth: '750px', margin: '0 auto 50px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        End-to-end Azure, AWS, Google Cloud & Microsoft 365 Management tailored for SMBs. Unlocking enterprise-grade tech at small business prices.
                    </p>
                    <div className="animate-fade-in-up delay-500" style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary btn-premium hover-scale" style={{ fontSize: '1.2rem', padding: '18px 45px', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0, 86, 255, 0.4)' }}>
                            Get Free Assessment
                        </Link>
                        <Link to="/services" className="btn hover-scale glass-panel" style={{ fontSize: '1.2rem', padding: '18px 45px', color: 'white', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.4)' }}>
                            Explore Services
                        </Link>
                    </div>
                </Reveal>
            </section>

            {/* Process Section */}
            <section className="section" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Your Path to Cloud Success</h2>
                    <div className="process-steps-container">
                        <Reveal className="text-center" animation="animate-zoom-in" delay="0.2s">
                            <Tilt className="step-card hover-scale card-neon-glow">
                                <div className="step-card-content">
                                    <div className="step-badge">01</div>
                                    <div className="step-icon-box" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                        <img src={assessIcon} alt="Assess" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,86,255,0.2))' }} />
                                    </div>
                                    <h3 style={{ marginBottom: '15px' }}>Assess</h3>
                                    <p style={{ color: 'var(--text-light)' }}>We audit your current infrastructure to identify cost savings and security gaps.</p>
                                </div>
                            </Tilt>
                        </Reveal>
                        <Reveal className="text-center" animation="animate-zoom-in" delay="0.4s">
                            <Tilt className="step-card hover-scale card-neon-glow">
                                <div className="step-card-content">
                                    <div className="step-badge">02</div>
                                    <div className="step-icon-box" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                        <img src={migrateIcon} alt="Migrate" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,86,255,0.2))' }} />
                                    </div>
                                    <h3 style={{ marginBottom: '15px' }}>Migrate & Modernize</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Seamless transition of workloads with zero downtime strategies.</p>
                                </div>
                            </Tilt>
                        </Reveal>
                        <Reveal className="text-center" animation="animate-zoom-in" delay="0.5s">
                            <Tilt className="step-card hover-scale card-neon-glow">
                                <div className="step-card-content">
                                    <div className="step-badge">03</div>
                                    <div className="step-icon-box" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                        <img src={manageIcon} alt="Manage" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,86,255,0.2))' }} />
                                    </div>
                                    <h3 style={{ marginBottom: '15px' }}>Manage & Optimize</h3>
                                    <p style={{ color: 'var(--text-light)' }}>24/7 monitoring, automated patching, and continuous compliance checks.</p>
                                </div>
                            </Tilt>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section bg-dot-pattern">
                <div className="container text-center">
                    <h2 className="section-title">Why Choose OSP Services?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '60px' }}>
                        <Reveal animation="animate-fade-in-up">
                            <Tilt className="card hover-scale glass-panel card-neon-glow" style={{ padding: '40px 30px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <div className="feature-icon-large">
                                    <img src={supportIcon} alt="Expert Support" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Expert Support</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>Certified professionals managing your cloud environment 24/7 with rapid response times.</p>
                            </Tilt>
                        </Reveal>
                        <Reveal animation="animate-fade-in-up" delay="0.1s">
                            <Tilt className="card hover-scale glass-panel card-neon-glow" style={{ padding: '40px 30px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <div className="feature-icon-large">
                                    <img src={costIcon} alt="Cost Efficient" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Cost Efficient</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>Optimized tailored plans ensuring you only pay for what you use, saving up to 40%.</p>
                            </Tilt>
                        </Reveal>
                        <Reveal animation="animate-fade-in-up" delay="0.2s">
                            <Tilt className="card hover-scale glass-panel card-neon-glow" style={{ padding: '40px 30px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <div className="feature-icon-large">
                                    <img src={secureIcon} alt="Secure" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>Secure by Design</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>Security-first approach with zero-trust architecture and automated compliance checks.</p>
                            </Tilt>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Tech Stack / Trusted By */}
            <section className="section" style={{ borderTop: '1px solid #eee' }}>
                <div className="container text-center">
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', opacity: 0.6, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>Powered by World-Class Technology</p>
                    <div className="scroller">
                        <div className="scroller-inner" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                            {/* Original Logos */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" alt="GCP" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1024px-Terraform_Logo.svg.png" alt="Terraform" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />

                            {/* Duplicate for Infinite Scroll Smoothness */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" alt="GCP" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1024px-Terraform_Logo.svg.png" alt="Terraform" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                            <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" style={{ height: '40px', filter: 'grayscale(100%)', opacity: 0.7 }} className="tech-logo" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
