import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const GlassNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (sectionName) => {
        const targetId = sectionName.toLowerCase().replace(' ', '-');
        setMenuOpen(false);

        if (location.pathname === '/journey') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/journey', { state: { scrollTo: targetId } });
        }
    };

    const navItems = ['Story', 'Reasons', 'Bucket List', 'Why You', 'About Us', 'Timeline'];

    return (
        <>
            {/* Desktop Navigation - wrapper div handles centering so Framer Motion doesn't override transform */}
            <div className="desktop-nav" style={{
                position: 'fixed',
                top: '20px',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000,
                pointerEvents: 'none',
            }}>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50px',
                    padding: '10px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    pointerEvents: 'all',
                }}
            >
                {navItems.map((item) => (
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
            </div>

            {/* Mobile Navigation - Hamburger Button */}
            <motion.button
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="mobile-nav-btn"
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 1001,
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
            >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-nav-menu"
                        style={{
                            position: 'fixed',
                            top: '80px',
                            right: '20px',
                            zIndex: 1000,
                            background: 'rgba(41, 47, 145, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                            minWidth: '200px',
                        }}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavigation(item)}
                                style={{
                                    background: 'transparent',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    transition: 'background 0.2s',
                                    fontFamily: 'inherit',
                                    textAlign: 'left',
                                    border: 'none',
                                    width: '100%',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                {item}
                            </button>
                        ))}

                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', margin: '5px 0' }} />

                        <Link to="/gallery" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                            <button
                                style={{
                                    background: location.pathname === '/gallery' ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    padding: '12px 20px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    border: 'none',
                                    fontFamily: 'inherit',
                                    width: '100%',
                                }}
                            >
                                <Camera size={16} /> Gallery
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .desktop-nav {
                    display: flex !important;
                }
                .mobile-nav-btn {
                    display: none !important;
                }
                .mobile-nav-menu {
                    display: flex !important;
                }
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-nav-btn {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
};

export default GlassNavigation;
