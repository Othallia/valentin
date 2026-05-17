import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Heart, Sparkles } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

import GlassNavigation from '../components/GlassNavigation';
import candidLaughImg from '../assets/candid_laugh.jpg';
import coffeeDateImg from '../assets/coffee_date.jpg';
import ticketStubImg from '../assets/ticket_stub_real.jpg';
import tinyGiftImg from '../assets/tiny_gift.jpg';
import flowersImg from '../assets/flowers.jpg';
import sillyImg from '../assets/silly.jpg';
import nightRideImg from '../assets/night_riding.jpg';

const GalleryPage = () => {
    // Bento Grid Items Configuration
    const galleryItems = [
        {
            id: 1,
            size: 'large', // 2x2 or wide
            title: "Candid Laughs",
            desc: "The moments we didn't plan.",
            color: "#4CA8DD",
            img: candidLaughImg
        },
        {
            id: 2,
            size: 'tall', // Vertical rect
            title: "Coffee Runs",
            desc: "Essential fuel for our dates.",
            color: "#292F91",
            img: coffeeDateImg
        },
        {
            id: 3,
            size: 'small', // 1x1
            title: "Movie Stubs",
            desc: "Proof we actually go out.",
            color: "#60A5FA",
            img: ticketStubImg
        },
        {
            id: 4,
            size: 'small',
            title: "Little Notes",
            desc: "Things I keep.",
            color: "#4CA8DD",
            img: tinyGiftImg
        },
        {
            id: 5,
            size: 'wide', // Horizontal rect
            title: "Night Drives",
            desc: "No destination, just vibes.",
            color: "#292F91",
            img: nightRideImg
        },
        {
            id: 6,
            size: 'small',
            title: "Random Flowers",
            desc: "You being sweet <3",
            color: "#60A5FA",
            img: flowersImg
        },
        {
            id: 7,
            size: 'small',
            title: "Silly Selfies",
            desc: "Us being us.",
            color: "#4CA8DD",
            img: sillyImg
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-gradient)',
            color: 'var(--white)',
            position: 'relative',
            paddingBottom: '4rem'
        }}>
            <FloatingParticles count={20} />

            {/* Header Navigation */}
            <GlassNavigation />

            {/* Spacer for fixed nav */}
            <div style={{ height: '90px' }}></div>

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 16px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px',
                        backdropFilter: 'blur(5px)', marginBottom: '1rem',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <Camera size={18} /> <span style={{ fontWeight: 600, fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>The Little Things</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        our core memories
                    </h1>
                    <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto' }}>
                        just the moments that actually matter.
                    </p>
                </motion.div>

                {/* BENTO GRID LAYOUT - Responsive */}
                <div className="bento-grid">
                    {/* Item 1: Large Square (Top Left) */}
                    <BentoCard item={galleryItems[0]} className="bento-large" delay={0.1} />

                    {/* Item 2: Tall Rectangle (Right) */}
                    <BentoCard item={galleryItems[1]} className="bento-tall" delay={0.2} />

                    {/* Item 3: Small Square */}
                    <BentoCard item={galleryItems[2]} className="bento-small" delay={0.3} />

                    {/* Item 4: Small Square */}
                    <BentoCard item={galleryItems[3]} className="bento-small" delay={0.4} />

                    {/* Item 5: Wide Rectangle */}
                    <BentoCard item={galleryItems[4]} className="bento-wide" delay={0.5} />

                    {/* Item 6: Small Square */}
                    <BentoCard item={galleryItems[5]} className="bento-small" delay={0.6} />

                    {/* Item 7: Small Square */}
                    <BentoCard item={galleryItems[6]} className="bento-small" delay={0.7} />
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.7 }}>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>more to come... ❤️</p>
                </div>
            </div>

            <style>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: 200px;
                    grid-auto-flow: row dense;
                    gap: 16px;
                }
                .bento-large { grid-column: span 2; grid-row: span 2; }
                .bento-tall  { grid-column: span 1; grid-row: span 2; }
                .bento-wide  { grid-column: span 2; grid-row: span 1; }
                .bento-small { grid-column: span 1; grid-row: span 1; }

                @media (max-width: 600px) {
                    .bento-grid {
                        grid-template-columns: repeat(3, 1fr);
                        grid-auto-rows: 120px;
                        grid-auto-flow: row dense;
                        gap: 8px;
                    }
                    .bento-large { grid-column: span 2; grid-row: span 2; }
                    .bento-tall  { grid-column: span 1; grid-row: span 2; }
                    .bento-wide  { grid-column: span 2; grid-row: span 1; }
                    .bento-small { grid-column: span 1; grid-row: span 1; }
                }
            `}</style>
        </div>
    );
};

const BentoCard = ({ item, className, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ scale: 1.02 }}
            className={className}
            style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1rem',
                cursor: 'pointer'
            }}
        >
            {/* Placeholder Background Color/Image */}
            {/* Background Image (if available) */}
            {item.img && (
                <img
                    src={item.img}
                    alt={item.title}
                    style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        transition: 'transform 0.5s ease'
                    }}
                />
            )}

            {/* Gradient Overlay (Darker at bottom for text, color tinted if no image) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: item.img
                    ? `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))`
                    : `linear-gradient(to bottom, transparent, ${item.color})`,
                opacity: item.img ? 1 : 0.3,
                zIndex: 0
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '5px' }}>{item.desc}</p>
            </div>

            <div style={{
                position: 'absolute',
                top: '15px', right: '15px',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '50%',
                padding: '8px',
                display: 'flex'
            }}>
                <Sparkles size={16} color="white" />
            </div>
        </motion.div>
    );
};

export default GalleryPage;
