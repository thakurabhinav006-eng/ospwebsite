import React, { useState } from 'react'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import WarpSpeedBg from '../components/WarpSpeedBg'
import holoGlobe from '../assets/holo_globe_contact.png'

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate a "Transmission Sending" effect (visual only for now)
        alert('Transmission Encrypted & Sent! We will establish a secure link shortly.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="contact-page" style={{ background: '#000', minHeight: '100vh', position: 'relative', overflow: 'hidden', color: 'white' }}>
            {/* --- Deep Space Background --- */}
            <div className="animate-aurora" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: 0, opacity: 0.6
            }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.5 }}>
                <WarpSpeedBg />
            </div>

            <section className="section" style={{ position: 'relative', zIndex: 2, padding: '120px 0 80px', display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
                <div className="container">
                    <Reveal className="section-title text-center" animation="animate-fade-in-up" style={{
                        fontSize: '3.5rem', marginBottom: '60px', textShadow: '0 0 30px rgba(0, 86, 255, 0.8)'
                    }}>
                        Establish Secure Uplink
                    </Reveal>

                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center'
                    }}>
                        {/* --- Left: Holo Globe & Info --- */}
                        <Reveal animation="animate-slide-in-left">
                            <Tilt className="holo-terminal">
                                <div className="terminal-header">
                                    <div className="status-light"></div>
                                    <span>SYSTEM STATUS: ONLINE</span>
                                </div>
                                <div style={{ position: 'relative', textAlign: 'center', marginBottom: '30px' }}>
                                    <img src={holoGlobe} alt="Global Network" style={{ width: '100%', maxWidth: '400px', borderRadius: '50%', boxShadow: '0 0 50px rgba(0, 198, 255, 0.3)' }} />
                                    <div className="rotating-ring"></div>
                                </div>
                                <div className="contact-details">
                                    <div className="detail-row">
                                        <span className="icon">📡</span>
                                        <div>
                                            <strong>Secure Channel:</strong>
                                            <p>info@osp-services.com</p>
                                        </div>
                                    </div>
                                    <div className="detail-row">
                                        <span className="icon">🛰️</span>
                                        <div>
                                            <strong>Direct Comms:</strong>
                                            <p>+91 9823 10 11 12</p>
                                        </div>
                                    </div>
                                    <div className="detail-row">
                                        <span className="icon">🌍</span>
                                        <div>
                                            <strong>Active Nodes:</strong>
                                            <p>UK • Europe • India</p>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </Reveal>

                        {/* --- Right: Transmission Form --- */}
                        <Reveal animation="animate-slide-in-right">
                            <div className="transmission-form-container glass-panel">
                                <div className="corner-bracket top-left"></div>
                                <div className="corner-bracket bottom-right"></div>

                                <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', borderBottom: '1px solid rgba(0, 198, 255, 0.3)', paddingBottom: '15px' }}>
                                    Init Transmission
                                </h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <label>Identity / Name</label>
                                        <input
                                            type="text" name="name" value={formData.name} onChange={handleChange} required
                                            placeholder="Enter your designation..."
                                        />
                                        <div className="scan-bar"></div>
                                    </div>
                                    <div className="input-group">
                                        <label>Comms Frequency / Email</label>
                                        <input
                                            type="email" name="email" value={formData.email} onChange={handleChange} required
                                            placeholder="secure@frequency.com"
                                        />
                                        <div className="scan-bar"></div>
                                    </div>
                                    <div className="input-group">
                                        <label>Encrypted Message</label>
                                        <textarea
                                            name="message" value={formData.message} onChange={handleChange} rows="5" required
                                            placeholder="Enter briefing details..."
                                        ></textarea>
                                        <div className="scan-bar"></div>
                                    </div>
                                    <button type="submit" className="btn-transmit">
                                        <span className="btn-text">TRANSMIT DATA</span>
                                        <span className="btn-glare"></span>
                                    </button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <style>{`
                /* Holo Terminal */
                .holo-terminal {
                    background: rgba(11, 17, 32, 0.6);
                    border: 1px solid rgba(0, 198, 255, 0.2);
                    padding: 30px;
                    border-radius: 12px;
                    backdrop-filter: blur(10px);
                }
                .terminal-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px;
                    font-family: monospace;
                    color: #00c6ff;
                    font-size: 0.9rem;
                    border-bottom: 1px solid rgba(0, 198, 255, 0.1);
                    padding-bottom: 10px;
                }
                .status-light {
                    width: 10px;
                    height: 10px;
                    background: #00ff00;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #00ff00;
                    animation: pulse 2s infinite;
                }
                .rotating-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 420px;
                    height: 420px;
                    border: 1px dashed rgba(0, 198, 255, 0.2);
                    border-radius: 50%;
                    animation: spin-slow 20s linear infinite;
                    pointer-events: none;
                }
                .contact-details {
                    margin-top: 20px;
                }
                .detail-row {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                    background: rgba(255,255,255,0.03);
                    padding: 15px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                .detail-row:hover {
                    background: rgba(0, 198, 255, 0.1);
                    transform: translateX(10px);
                }
                .icon {
                    font-size: 1.5rem;
                }
                .contact-details p {
                    color: rgba(255,255,255,0.7);
                    font-family: monospace;
                    margin: 0;
                }

                /* Transmission Form */
                .transmission-form-container {
                    background: rgba(11, 17, 32, 0.8);
                    padding: 50px;
                    border-radius: 4px; /* Harder edges for tech look */
                    position: relative;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .corner-bracket {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #00c6ff;
                }
                .top-left { top: 0; left: 0; border-bottom: none; border-right: none; }
                .bottom-right { bottom: 0; right: 0; border-top: none; border-left: none; }

                .input-group {
                    margin-bottom: 25px;
                    position: relative;
                }
                .input-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: #00c6ff;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .input-group input, .input-group textarea {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 198, 255, 0.3);
                    color: white;
                    padding: 15px;
                    font-family: inherit;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .input-group input:focus, .input-group textarea:focus {
                    outline: none;
                    border-color: #00c6ff;
                    background: rgba(0, 198, 255, 0.05);
                    box-shadow: 0 0 15px rgba(0, 198, 255, 0.2);
                }
                .scan-bar {
                    height: 2px;
                    width: 0%;
                    background: #00c6ff;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transition: width 0.3s ease;
                    box-shadow: 0 0 10px #00c6ff;
                }
                .input-group input:focus + .scan-bar, 
                .input-group textarea:focus + .scan-bar {
                    width: 100%;
                }

                .btn-transmit {
                    width: 100%;
                    padding: 18px;
                    background: linear-gradient(90deg, #0056ff, #00c6ff);
                    border: none;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .btn-transmit:hover {
                    letter-spacing: 4px;
                    box-shadow: 0 0 30px rgba(0, 198, 255, 0.6);
                }
                .btn-glare {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    animation: glare 3s infinite;
                }
                
                @keyframes glare {
                    0% { left: -100%; }
                    20% { left: 100%; }
                    100% { left: 100%; }
                }
            `}</style>
        </div>
    )
}

export default ContactPage
