import React from 'react'

const services = [
    { title: "Azure Administration", desc: "Management, Monitoring, RBAC, Backup & Cost dashboards." },
    { title: "Managed Cloud Services", desc: "24×7 Monitoring, SLA-based operations, security hardening." },
    { title: "Cloud Migration", desc: "Zero-downtime Azure/AWS migrations for SMB workloads." },
    { title: "Security & Compliance", desc: "MFA, Conditional Access, Zero Trust & GDPR support." },
    { title: "Backup & Disaster Recovery", desc: "Azure Backup, ASR & DR drills." },
    { title: "Microsoft 365 Support", desc: "Email setup, security policies, licensing optimisation." },
    { title: "DevOps Support", desc: "Azure pipelines, Terraform & AKS/EKS." }
]

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Our Cloud Services</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {services.map((service, index) => (
                        <div key={index} className="card" style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.4rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '60px' }}>
                    <img className="full" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80" alt="Cloud Infrastructure" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                </div>
            </div>
        </section>
    )
}

export default Services
