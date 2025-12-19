import React from 'react'
import Pricing from '../components/Pricing'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import RotatingText from '../components/RotatingText'
import WarpSpeedBg from '../components/WarpSpeedBg'
import serviceAzure from '../assets/service_azure.png'
import serviceAws from '../assets/service_aws.png'
import serviceGcp from '../assets/service_gcp.png'
import serviceMigration from '../assets/service_migration.png'
import serviceSecurity from '../assets/service_security.png'
import serviceDevops from '../assets/service_devops.png'

const servicesList = [
    {
        title: "Azure Administration & Governance",
        desc: "We take the complexity out of Azure. From setting up robust Role-Based Access Control (RBAC) to managing your costs with budgets and alerts, we ensure your Azure environment is optimized. Our team handles daily operations, resource scaling, and policy enforcement to maintain a secure and compliant cloud estate.",
        icon: "☁️",
        image: serviceAzure
    },
    {
        title: "AWS Infrastructure & Management",
        desc: "Maximize the power of Amazon Web Services with our certified solution architects. We manage your EC2 fleets, S3 storage lifecycles, and RDS instances. From complex VPC networking to serverless Lambda deployments, we ensure your AWS environment is cost-optimized, secure, and resilient.",
        icon: "🟧",
        image: serviceAws
    },
    {
        title: "Google Cloud Platform (GCP)",
        desc: "Harness Google's planetary-scale infrastructure. We specialize in Google Kubernetes Engine (GKE) for container orchestration, BigQuery for data warehousing, and Compute Engine optimization. We build zero-trust security models using GCP's Identity-Aware Proxy and Cloud IAM.",
        icon: "🟦",
        image: serviceGcp
    },
    {
        title: "Cloud Migration Strategy",
        desc: "Moving to the cloud doesn't have to be disruptive. We specialize in 'Lift and Shift' as well as modernization migrations. We assess your on-premise servers, map dependencies, and execute a migration plan that minimizes downtime. Whether it's to AWS or Azure, we ensure your data integrity is preserved throughout the journey.",
        icon: "🚀",
        image: serviceMigration
    },
    {
        title: "Advanced Security & Compliance",
        desc: "Security is built into everything we do. We implement Microsoft Defender for Cloud and Microsoft Sentinel to provide real-time threat detection. We help you achieve and maintain compliance with standards like GDPR and ISO 27001 by implementing Zero Trust architecture, Multifactor Authentication (MFA), and Conditional Access policies.",
        icon: "🔒",
        image: serviceSecurity
    },
    {
        title: "DevOps & Automation Intelligence",
        desc: "Accelerate your software delivery with modern DevOps practices. We build CI/CD pipelines using Azure DevOps and GitHub Actions to automate your deployments. Our Infrastructure as Code (IaC) solutions using Terraform and Bicep ensure your environment is reproducible, scalable, and error-free.",
        icon: "⚙️",
        image: serviceDevops
    }
]

const ServicesPage = () => {
    return (
        <div className="services-page">
            <section className="animate-aurora" style={{
                color: 'white',
                padding: '120px 20px',
                textAlign: 'center',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <WarpSpeedBg />
                <div className="tech-grid"></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Reveal className="section-title animate-fade-in-up" delay="0s" animation="animate-fade-in-up" style={{ color: 'white', textShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                        Our <RotatingText words={["Comprehensive", "Agile", "Secure", "Scalable"]} /> Cloud Solutions
                    </Reveal>
                    <p className="animate-fade-in-up delay-200" style={{ maxWidth: '800px', margin: '0 auto 80px', fontSize: '1.25rem', opacity: '0.9', lineHeight: '1.6', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        We deliver enterprise-grade cloud services tailored for the agility and budget of SMBs. Explore how we can transform your IT infrastructure.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {servicesList.map((service, index) => (
                            <Reveal key={index} animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}>
                                <Tilt className="hover-scale card-neon-glow" style={{ borderRadius: '20px' }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                        alignItems: 'center',
                                        gap: '60px',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)'
                                    }} className={`service-card-responsive`}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white', textShadow: '0 0 20px rgba(0, 86, 255, 0.6)' }}>{service.title}</h2>
                                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '30px' }}>{service.desc}</p>
                                            <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', marginBottom: '20px' }}>
                                                <li>Proactive Monitoring & Alerts</li>
                                                <li>Cost Optimization Reports</li>
                                                <li>Dedicated Technical Expert</li>
                                            </ul>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }} />
                                        </div>
                                    </div>
                                </Tilt>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional services grid for smaller items */}
            {/* Additional services grid for smaller items */}
            <section className="section" style={{ background: '#0b1120', position: 'relative' }}>
                <div className="tech-grid" style={{ opacity: 0.3 }}></div>
                <div className="container">
                    <h2 className="section-title text-center" style={{ color: 'white', textShadow: '0 0 10px rgba(0, 86, 255, 0.5)' }}>Additional Capabilities</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginTop: '60px' }}>
                        {/* Backup Service */}
                        <Reveal animation="animate-zoom-in">
                            <Tilt className="card hover-scale neo-glass-card" style={{ height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
                                <div className="card-bg-scanner"></div>
                                <div style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
                                    <div className="icon-reactor-container">
                                        <div className="reactor-ring-outer"></div>
                                        <div className="reactor-ring-inner"></div>
                                        <div className="reactor-core">💾</div>
                                    </div>
                                    <h3 style={{ marginBottom: '20px', color: 'white', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '1px', textShadow: '0 0 10px rgba(0, 198, 255, 0.5)' }}>Backup & Disaster Recovery</h3>
                                    <div style={{ height: '2px', width: '40px', background: '#00c6ff', marginBottom: '20px', boxShadow: '0 0 10px #00c6ff' }}></div>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                        Complete data fortress. <span style={{ color: '#00c6ff' }}>Azure Site Recovery</span> and immutable backups ensure your business survives any digital threat.
                                    </p>
                                </div>
                            </Tilt>
                        </Reveal>

                        {/* M365 Service */}
                        <Reveal animation="animate-zoom-in" delay="0.1s">
                            <Tilt className="card hover-scale neo-glass-card" style={{ height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
                                <div className="card-bg-scanner"></div>
                                <div style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
                                    <div className="icon-reactor-container">
                                        <div className="reactor-ring-outer" style={{ animationDirection: 'reverse' }}></div>
                                        <div className="reactor-ring-inner" style={{ animationDuration: '4s' }}></div>
                                        <div className="reactor-core">🏢</div>
                                    </div>
                                    <h3 style={{ marginBottom: '20px', color: 'white', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '1px', textShadow: '0 0 10px rgba(0, 198, 255, 0.5)' }}>Microsoft 365 Mastery</h3>
                                    <div style={{ height: '2px', width: '40px', background: '#00c6ff', marginBottom: '20px', boxShadow: '0 0 10px #00c6ff' }}></div>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                        Unlock the full suite. Advanced security hardening, licensing optimization, and seamless <span style={{ color: '#00c6ff' }}>compliance management</span>.
                                    </p>
                                </div>
                            </Tilt>
                        </Reveal>

                        {/* Migration Service */}
                        <Reveal animation="animate-zoom-in" delay="0.2s">
                            <Tilt className="card hover-scale neo-glass-card" style={{ height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
                                <div className="card-bg-scanner"></div>
                                <div style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
                                    <div className="icon-reactor-container">
                                        <div className="reactor-ring-outer"></div>
                                        <div className="reactor-ring-inner"></div>
                                        <div className="reactor-core">📨</div>
                                    </div>
                                    <h3 style={{ marginBottom: '20px', color: 'white', fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '1px', textShadow: '0 0 10px rgba(0, 198, 255, 0.5)' }}>Zero-Downtime Migration</h3>
                                    <div style={{ height: '2px', width: '40px', background: '#00c6ff', marginBottom: '20px', boxShadow: '0 0 10px #00c6ff' }}></div>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                        Move with confidence. Expert transition from legacy systems to the modern cloud with <span style={{ color: '#00c6ff' }}>zero business interruption</span>.
                                    </p>
                                </div>
                            </Tilt>
                        </Reveal>
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

                /* Ultra-Premium Animations */
                .neo-glass-card {
                    background: rgba(11, 17, 32, 0.6);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(255,255,255,0.05);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    transition: all 0.4s ease;
                }
                .neo-glass-card:hover {
                    background: rgba(11, 17, 32, 0.8);
                    border-color: rgba(0, 198, 255, 0.5);
                    box-shadow: 0 0 40px rgba(0, 86, 255, 0.3), inset 0 0 20px rgba(0, 198, 255, 0.1);
                    transform: translateY(-10px);
                }

                /* Scanner Background Effect */
                .card-bg-scanner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        linear-gradient(transparent 50%, rgba(0, 198, 255, 0.05) 50%),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 100% 4px, 20px 100%;
                    z-index: 1;
                    opacity: 0.3;
                    pointer-events: none;
                }
                
                /* Reactor Core Icon Container */
                .icon-reactor-container {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .reactor-core {
                    font-size: 2.5rem;
                    z-index: 10;
                    filter: drop-shadow(0 0 10px rgba(0, 198, 255, 0.8));
                    animation: pulse-core 2s infinite ease-in-out;
                }

                .reactor-ring-outer {
                    position: absolute;
                    inset: 0;
                    border: 2px dashed rgba(0, 198, 255, 0.3);
                    border-radius: 50%;
                    animation: spin-slow 10s linear infinite;
                }
                
                .reactor-ring-inner {
                    position: absolute;
                    inset: 10px;
                    border: 2px solid rgba(0, 198, 255, 0.6);
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    animation: spin-fast 3s linear infinite reverse;
                    box-shadow: 0 0 15px rgba(0, 198, 255, 0.2);
                }

                @keyframes spin-slow {
                    to { transform: rotate(360deg); }
                }

                @keyframes spin-fast {
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse-core {
                    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0, 198, 255, 0.6)); }
                    50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(0, 198, 255, 1)); }
                }
            `}</style>
        </div>
    )
}

export default ServicesPage
