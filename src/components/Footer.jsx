import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            padding: '3rem 1rem',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.2)', /* Visible Glass Background */
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            width: '100%',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <Heart size={20} fill="#ff4d4d" color="#ff4d4d" />
                    <span style={{ fontSize: '1.2rem', color: 'var(--white)', fontWeight: '600', letterSpacing: '0.5px' }}>forever & always</span>
                    <Heart size={20} fill="#ff4d4d" color="#ff4d4d" />
                </div>
                <p style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>made with love, for our anniversary.</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.6, color: 'rgba(255,255,255,0.6)' }}>© 2026 octavianiptr</p>
            </div>
        </footer>
    );
};

export default Footer;
