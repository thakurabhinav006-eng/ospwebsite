import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you! This form will be connected to the backend later.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '50px'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Get in Touch</h3>
                        <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                            <strong>Email:</strong> info@osp-services.com<br />
                            <strong>Mobile:</strong> +91 9823 10 11 12<br />
                            <strong>Regions:</strong> UK, Europe, India
                        </p>
                        <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80" alt="Contact Us" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                />
                            </div>
                            <div className="mb-4">
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                />
                            </div>
                            <div className="mb-4">
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
