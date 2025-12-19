import React from 'react'
import Tilt from './Tilt'

const plans = [
    { name: "Starter", price: "£199", period: "/mo", features: "Monitoring, basic admin, monthly reports, email support." },
    { name: "Growth", price: "£499", period: "/mo", features: "24×7 monitoring, incidents, cost optimisation & security." },
    { name: "Business", price: "£899", period: "/mo", features: "Dedicated engineer, DR, DevOps & priority support." },
    { name: "Custom Plan", price: "Contact Us", period: "", features: "Fully customised for medium-size companies." }
]

const Pricing = () => {
    return (
        <section id="pricing" className="section" style={{ background: '#0b1120', position: 'relative', overflow: 'hidden' }}>
            <div className="tech-grid" style={{ opacity: 0.2 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title animate-fade-in-up" style={{ color: 'white', textShadow: '0 0 15px rgba(0, 86, 255, 0.6)' }}>Pricing Plans</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '40px'
                }}>
                    {plans.map((plan, index) => (
                        <Tilt key={index} className={`card-neon-glow animate-fade-in-up delay-${(index + 1) * 100}`} style={{ borderRadius: '16px' }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                padding: '40px 30px',
                                borderRadius: '16px',
                                border: index === 1 ? '1px solid rgba(0, 86, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                boxShadow: index === 1 ? '0 0 30px rgba(0, 86, 255, 0.15)' : 'none'
                            }}>
                                {index === 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'linear-gradient(90deg, #0056ff, #00c6ff)',
                                        color: 'white',
                                        padding: '6px 18px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 0 15px rgba(0, 86, 255, 0.5)',
                                        letterSpacing: '1px'
                                    }}>POPULAR</div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>{plan.name}</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '5px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
                                    {plan.price}<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 'normal' }}>{plan.period}</span>
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '30px', fontStyle: 'italic' }}>
                                    * T&C applied
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', flexGrow: 1, lineHeight: '1.6' }}>{plan.features}</p>
                                <button className={`btn btn-premium hover-scale glow-on-hover`} style={{
                                    width: '100%',
                                    border: index === 1 ? 'none' : '1px solid rgba(255,255,255,0.3)',
                                    color: 'white',
                                    background: index === 1 ? 'linear-gradient(90deg, #0056ff, #00c6ff)' : 'transparent'
                                }}>
                                    Choose Plan
                                </button>
                            </div>
                        </Tilt>
                    ))}
                </div>
                <div style={{ marginTop: '80px', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        inset: '0',
                        background: 'linear-gradient(to bottom, transparent, #0b1120)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}></div>
                    <img className="full hover-scale" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80" alt="Pricing Overview" style={{
                        width: '100%',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }} />
                </div>
            </div>
        </section>
    )
}

export default Pricing
