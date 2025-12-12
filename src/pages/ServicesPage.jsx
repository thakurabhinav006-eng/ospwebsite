import React from 'react'
import Pricing from '../components/Pricing'

const servicesList = [
    {
        title: "Azure Administration & Governance",
        desc: "We take the complexity out of Azure. From setting up robust Role-Based Access Control (RBAC) to managing your costs with budgets and alerts, we ensure your Azure environment is optimized. Our team handles daily operations, resource scaling, and policy enforcement to maintain a secure and compliant cloud estate.",
        icon: "☁️",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Cloud Migration Strategy",
        desc: "Moving to the cloud doesn't have to be disruptive. We specialize in 'Lift and Shift' as well as modernization migrations. We assess your on-premise servers, map dependencies, and execute a migration plan that minimizes downtime. Whether it's to AWS or Azure, we ensure your data integrity is preserved throughout the journey.",
        icon: "🚀",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Advanced Security & Compliance",
        desc: "Security is built into everything we do. We implement Microsoft Defender for Cloud and Microsoft Sentinel to provide real-time threat detection. We help you achieve and maintain compliance with standards like GDPR and ISO 27001 by implementing Zero Trust architecture, Multifactor Authentication (MFA), and Conditional Access policies.",
        icon: "🔒",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "DevOps & Automation Intelligence",
        desc: "Accelerate your software delivery with modern DevOps practices. We build CI/CD pipelines using Azure DevOps and GitHub Actions to automate your deployments. Our Infrastructure as Code (IaC) solutions using Terraform and Bicep ensure your environment is reproducible, scalable, and error-free.",
        icon: "⚙️",
        image: "https://images.unsplash.com/photo-1667372393119-c81c0e371429?auto=format&fit=crop&w=1000&q=80"
    }
]

const ServicesPage = () => {
    return (
        <div className="services-page">
            <section className="section" style={{ background: 'var(--bg-light)', paddingBottom: '40px' }}>
                <div className="container">
                    <h1 className="section-title">Our Comprehensive Cloud Solutions</h1>
                    <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 80px', fontSize: '1.25rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                        We deliver enterprise-grade cloud services tailored for the agility and budget of SMBs. Explore how we can transform your IT infrastructure.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {servicesList.map((service, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                alignItems: 'center',
                                gap: '60px',
                                background: 'white',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }} className="service-card-responsive">
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--dark-blue)' }}>{service.title}</h2>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>{service.desc}</p>
                                    <ul style={{ paddingLeft: '20px', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px' }}>
                                        <li>Proactive Monitoring & Alerts</li>
                                        <li>Cost Optimization Reports</li>
                                        <li>Dedicated Technical Expert</li>
                                    </ul>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional services grid for smaller items */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Additional Capabilities</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        <div className="card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}>
                            <h3 style={{ marginBottom: '10px' }}>💾 Backup & Disaster Recovery</h3>
                            <p>Azure Site Recovery and immutable backups to protect against ransomware.</p>
                        </div>
                        <div className="card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}>
                            <h3 style={{ marginBottom: '10px' }}>🏢 Microsoft 365 Management</h3>
                            <p>Exchange Online, SharePoint, Teams security hardening and licensing.</p>
                        </div>
                        <div className="card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}>
                            <h3 style={{ marginBottom: '10px' }}>📨 Email Migration</h3>
                            <p>Zero-downtime migration from legacy Exchange/IMAP to Office 365.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse Pricing Component */}
            <Pricing />

            {/* CSS for responsive zig-zag */}
            <style>{`
                @media (max-width: 900px) {
                    .service-card-responsive {
                        flex-direction: column !important;
                        gap: 30px !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default ServicesPage
