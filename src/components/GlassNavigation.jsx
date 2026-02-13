import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';

const GlassNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (sectionName) => {
        const targetId = sectionName.toLowerCase().replace(' ', '-');

        // If we are already on the Journey Page, just scroll
        if (location.pathname === '/journey') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If we are on another page (like Gallery), navigate to Journey then scroll
            navigate('/journey', { state: { scrollTo: targetId } });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                padding: '10px 10px', /* Compact padding */
                display: 'flex',
                alignItems: 'center',
                gap: '5px', /* Closer gap */
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                maxWidth: '95vw', /* Ensure it fits on mobile */
                overflowX: 'auto', /* Scroll on very small screens */
                whiteSpace: 'nowrap'
            }}
        >
            {['Story', 'Reasons', 'Bucket List', 'Why You', 'About Us', 'Timeline'].map((item) => (
                <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    style={{
                        background: 'transparent',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        transition: 'background 0.3s',
                        fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                    {item}
                </button>
            ))}

            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)', margin: '0 5px' }}></div>

            <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <button
                    style={{
                        background: location.pathname === '/gallery' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'inherit'
                    }}
                >
                    <Camera size={14} /> Gallery
                </button>
            </Link>
        </motion.nav>
    );
};

export default GlassNavigation;
