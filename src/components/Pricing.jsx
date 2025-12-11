import React from 'react'

const plans = [
    { name: "Starter", price: "£199", period: "/mo", features: "Monitoring, basic admin, monthly reports, email support." },
    { name: "Growth", price: "£499", period: "/mo", features: "24×7 monitoring, incidents, cost optimisation & security." },
    { name: "Business", price: "£899", period: "/mo", features: "Dedicated engineer, DR, DevOps & priority support." },
    { name: "Custom Plan", price: "Contact Us", period: "", features: "Fully customised for medium-size companies." }
]

const Pricing = () => {
    return (
        <section id="pricing" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">Pricing Plans</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} className="card" style={{
                            background: 'white',
                            padding: '40px 30px',
                            borderRadius: '12px',
                            border: index === 1 ? '2px solid var(--primary-blue)' : '1px solid #e5e7eb',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: index === 1 ? '0 10px 30px rgba(0, 86, 255, 0.1)' : 'none'
                        }}>
                            {index === 1 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary-blue)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>POPULAR</span>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--dark-blue)', marginBottom: '20px' }}>
                                {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: 'normal' }}>{plan.period}</span>
                            </div>
                            <p style={{ color: 'var(--text-light)', marginBottom: '30px', flexGrow: 1 }}>{plan.features}</p>
                            <button className={`btn ${index === 1 ? 'btn-primary' : ''}`} style={{
                                width: '100%',
                                border: index === 1 ? 'none' : '1px solid var(--primary-blue)',
                                color: index === 1 ? 'white' : 'var(--primary-blue)',
                                background: index === 1 ? 'var(--primary-blue)' : 'transparent'
                            }}>
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '60px' }}>
                    <img className="full" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80" alt="Pricing Overview" style={{ width: '100%', borderRadius: '12px' }} />
                </div>
            </div>
        </section>
    )
}

export default Pricing
