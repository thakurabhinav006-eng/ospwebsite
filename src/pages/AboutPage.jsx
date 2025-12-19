import React from 'react'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'
import RotatingText from '../components/RotatingText'
import WarpSpeedBg from '../components/WarpSpeedBg'
import teamCeoHolo from '../assets/team_ceo_holo.png'
import teamCtoHolo from '../assets/team_cto_holo.png'
import teamVpHolo from '../assets/team_vp_holo.png'

const AboutPage = () => {
    return (
        <div className="about-page" style={{ background: '#000', minHeight: '100vh', position: 'relative', overflow: 'hidden', color: 'white' }}>
            {/* --- Hero Section --- */}
            <div className="animate-aurora" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: 0, opacity: 0.6
            }}></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.5 }}>
                <WarpSpeedBg />
            </div>

            <section className="section" style={{ position: 'relative', zIndex: 2, padding: '120px 0 80px' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <Reveal className="section-title animate-fade-in-up" delay="0s" style={{
                            fontSize: '4rem', marginBottom: '30px', textShadow: '0 0 30px rgba(0, 86, 255, 0.8)'
                        }}>
                            We Are <RotatingText words={["Visionaries", "Architects", "Innovators", "OSP Services"]} />
                        </Reveal>
                        <Reveal animation="animate-fade-in" delay="0.2s">
                            <p style={{
                                fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', marginBottom: '80px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 80px'
                            }}>
                                Forging the future of enterprise cloud computing for the ambitious SMB. We don't just manage IT; we engineered the <span style={{ color: '#00c6ff', fontWeight: 'bold' }}>next evolution</span> of your business.
                            </p>
                        </Reveal>
                    </div>

                    {/* --- Mission Control (Philosophy) --- */}
                    <Reveal animation="animate-zoom-in" delay="0.3s" style={{ marginBottom: '120px' }}>
                        <div className="mission-control-panel">
                            <div className="hud-corner top-left"></div>
                            <div className="hud-corner top-right"></div>
                            <div className="hud-corner bottom-left"></div>
                            <div className="hud-corner bottom-right"></div>

                            <div className="grid-overlay"></div>

                            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
                                <div style={{ flex: '1 1 500px' }}>
                                    <h2 style={{
                                        fontSize: '2.5rem', marginBottom: '30px', color: 'white', textTransform: 'uppercase', letterSpacing: '2px',
                                        borderBottom: '2px solid #00c6ff', display: 'inline-block', paddingBottom: '10px'
                                    }}>
                                        Mission Control
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                                        At OSP, we believe technology is the ultimate leverage. Large corporations have wielded this power for decades. <strong style={{ color: '#00c6ff' }}>Now it's your turn.</strong>
                                    </p>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
                                        We strip away the complexity of the cloud, providing you with a modular, scalable, and battle-hardened infrastructure that grows faster than you do. We are the strategic engine behind your ascent.
                                    </p>
                                </div>
                                <div style={{ flex: '1 1 400px', position: 'relative' }}>
                                    {/* Abstract Tech Visualization */}
                                    <div className="tech-viz-circle"></div>
                                    <div className="tech-viz-data">
                                        <div className="data-row"><span>UPTIME</span><div className="bar"><div className="fill" style={{ width: '99%' }}></div></div><span>99.9%</span></div>
                                        <div className="data-row"><span>SECURITY</span><div className="bar"><div className="fill" style={{ width: '100%' }}></div></div><span>LOCKED</span></div>
                                        <div className="data-row"><span>SCALE</span><div className="bar"><div className="fill" style={{ width: '85%' }}></div></div><span>AUTO</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* --- Holographic Team --- */}
                    <div style={{ marginBottom: '120px' }}>
                        <h2 className="section-title text-center" style={{ color: 'white', marginBottom: '60px', textShadow: '0 0 20px rgba(0, 86, 255, 0.6)' }}>Command Crew</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            {/* Member 1 */}
                            <Reveal animation="animate-fade-in-up" delay="0.1s">
                                <Tilt className="holo-card">
                                    <div className="holo-img-container">
                                        <img src={teamCeoHolo} alt="CEO" />
                                        <div className="scan-line"></div>
                                        <div className="glitch-overlay"></div>
                                    </div>
                                    <div className="holo-info">
                                        <h3>Alex Stratos</h3>
                                        <span>Chief Architect</span>
                                    </div>
                                </Tilt>
                            </Reveal>
                            {/* Member 2 */}
                            <Reveal animation="animate-fade-in-up" delay="0.2s">
                                <Tilt className="holo-card">
                                    <div className="holo-img-container">
                                        <img src={teamCtoHolo} alt="CTO" />
                                        <div className="scan-line"></div>
                                        <div className="glitch-overlay"></div>
                                    </div>
                                    <div className="holo-info">
                                        <h3>Sarah Cortex</h3>
                                        <span>Head of Ops</span>
                                    </div>
                                </Tilt>
                            </Reveal>
                            {/* Member 3 */}
                            <Reveal animation="animate-fade-in-up" delay="0.3s">
                                <Tilt className="holo-card">
                                    <div className="holo-img-container">
                                        <img src={teamVpHolo} alt="VP Sales" />
                                        <div className="scan-line"></div>
                                        <div className="glitch-overlay"></div>
                                    </div>
                                    <div className="holo-info">
                                        <h3>Marcus Vector</h3>
                                        <span>Strategy Lead</span>
                                    </div>
                                </Tilt>
                            </Reveal>
                        </div>
                    </div>

                    {/* --- DNA Core Values --- */}
                    <div>
                        <h2 className="section-title text-center" style={{ color: 'white', marginBottom: '60px', textShadow: '0 0 20px rgba(0, 86, 255, 0.6)' }}>Core DNA</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <Reveal animation="animate-zoom-in" delay="0.1s">
                                <div className="dna-card">
                                    <div className="icon-box">⚡</div>
                                    <h3>Velocity</h3>
                                    <p>Speed is our currency. We deploy, iterate, and solve faster than the competition.</p>
                                </div>
                            </Reveal>
                            <Reveal animation="animate-zoom-in" delay="0.2s">
                                <div className="dna-card">
                                    <div className="icon-box">🛡️</div>
                                    <h3>Ironclad</h3>
                                    <p>Security isn't a feature; it's the foundation of every line of code we write.</p>
                                </div>
                            </Reveal>
                            <Reveal animation="animate-zoom-in" delay="0.3s">
                                <div className="dna-card">
                                    <div className="icon-box">🔮</div>
                                    <h3>Foresight</h3>
                                    <p>We don't just fix today's problems. We engineer solutions for tomorrow's scale.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                </div>
            </section>

            <style>{`
                /* Mission Control Panel */
                .mission-control-panel {
                    background: rgba(11, 17, 32, 0.8);
                    border: 1px solid rgba(0, 198, 255, 0.2);
                    padding: 60px;
                    position: relative;
                    backdrop-filter: blur(20px);
                    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
                }
                .hud-corner {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    border: 3px solid #00c6ff;
                    transition: all 0.3s ease;
                }
                .top-left { top: -1px; left: -1px; border-right: none; border-bottom: none; }
                .top-right { top: -1px; right: -1px; border-left: none; border-bottom: none; }
                .bottom-left { bottom: -1px; left: -1px; border-right: none; border-top: none; }
                .bottom-right { bottom: -1px; right: -1px; border-left: none; border-top: none; }
                
                .mission-control-panel:hover .hud-corner {
                    width: 50px;
                    height: 50px;
                    box-shadow: 0 0 15px #00c6ff;
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(0, 198, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 198, 255, 0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                }

                /* Tech Viz */
                .tech-viz-circle {
                    width: 200px;
                    height: 200px;
                    border: 2px dashed rgba(0, 198, 255, 0.3);
                    border-radius: 50%;
                    margin: 0 auto 40px;
                    position: relative;
                    animation: spin-slow 20s linear infinite;
                }
                .tech-viz-circle::before {
                    content: '';
                    position: absolute;
                    inset: 10px;
                    border: 2px solid rgba(0, 198, 255, 0.6);
                    border-radius: 50%;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    animation: spin-fast 5s linear infinite reverse;
                }

                .tech-viz-data {
                    background: rgba(0,0,0,0.5);
                    padding: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    font-family: monospace;
                }
                .data-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 15px;
                    color: #00c6ff;
                }
                .data-row:last-child { margin-bottom: 0; }
                .bar {
                    flex-grow: 1;
                    height: 6px;
                    background: rgba(255,255,255,0.1);
                    margin: 0 15px;
                }
                .bar .fill {
                    height: 100%;
                    background: #00c6ff;
                    box-shadow: 0 0 10px #00c6ff;
                    animation: pulse-width 2s infinite ease-in-out;
                }

                /* Holo Card */
                .holo-card {
                    background: transparent;
                    position: relative;
                }
                .holo-img-container {
                    position: relative;
                    overflow: hidden;
                    border-radius: 4px;
                    border: 1px solid rgba(0, 198, 255, 0.3);
                }
                .holo-img-container img {
                    width: 100%;
                    height: 350px;
                    object-fit: cover;
                    filter: grayscale(100%) contrast(1.2) brightness(0.8) sepia(1) hue-rotate(180deg) saturate(2);
                    transition: all 0.3s ease;
                }
                .holo-card:hover img {
                    filter: grayscale(0%) contrast(1.1);
                }
                .scan-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: rgba(0, 198, 255, 0.8);
                    box-shadow: 0 0 10px rgba(0, 198, 255, 1);
                    animation: scan 3s linear infinite;
                    z-index: 2;
                }
                
                .holo-info {
                    margin-top: 15px;
                    border-left: 3px solid #00c6ff;
                    padding-left: 15px;
                }
                .holo-info h3 {
                    color: white;
                    margin: 0;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .holo-info span {
                    color: #00c6ff;
                    font-family: monospace;
                    font-size: 0.9rem;
                }

                /* DNA Card */
                .dna-card {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 40px;
                    text-align: center;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .dna-card:hover {
                    transform: translateY(-5px);
                    border-color: #00c6ff;
                    box-shadow: 0 10px 30px rgba(0, 198, 255, 0.1);
                }
                .dna-card .icon-box {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    filter: drop-shadow(0 0 15px rgba(0, 198, 255, 0.5));
                }
                .dna-card h3 {
                    color: white;
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
                .dna-card p {
                    color: rgba(255,255,255,0.7);
                    line-height: 1.6;
                }

                @keyframes scan {
                    0% { top: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
                @keyframes pulse-width {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
            `}</style>
        </div>
    )
}

export default AboutPage
