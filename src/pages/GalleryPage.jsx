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
            <div style={{ height: '100px' }}></div>

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: 'rgba(255,255,255,0.1)', padding: '8px 20px', borderRadius: '30px',
                        backdropFilter: 'blur(5px)', marginBottom: '1rem',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <Camera size={20} /> <span style={{ fontWeight: 600 }}>The Little Things</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        Core Memories
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto' }}>
                        Just a collection of my favorite moments with you.
                    </p>
                </motion.div>

                {/* BENTOO GRID LAYOUT */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive cols
                    gridAutoRows: '200px', // Base row height
                    gap: '20px',
                }}>
                    {/* 
                        CSS Grid Span Logic (Manual for now to match specific Bento shapes)
                        First item: Large (2x2)
                        Second item: Tall (1x2)
                        Third item: Small (1x1)
                        Fourth item: Small (1x1)
                        Fifth item: Wide (2x1)
                        Sixth item: Small (1x1)
                     */}

                    {/* Item 1: Large Square (Top Left) */}
                    <BentoCard item={galleryItems[0]} style={{ gridColumn: 'span 2', gridRow: 'span 2' }} delay={0.1} />

                    {/* Item 2: Tall Rectangle (Right) */}
                    <BentoCard item={galleryItems[1]} style={{ gridColumn: 'span 1', gridRow: 'span 2' }} delay={0.2} />

                    {/* Item 3: Small Square */}
                    <BentoCard item={galleryItems[2]} style={{ gridColumn: 'span 1', gridRow: 'span 1' }} delay={0.3} />

                    {/* Item 4: Small Square (Flows naturally) */}
                    <BentoCard item={galleryItems[3]} style={{ gridColumn: 'span 1', gridRow: 'span 1' }} delay={0.4} />

                    {/* Item 5: Wide Rectangle */}
                    <BentoCard item={galleryItems[4]} style={{ gridColumn: 'span 2', gridRow: 'span 1' }} delay={0.5} />

                    {/* Item 6: Small Square */}
                    <BentoCard item={galleryItems[5]} style={{ gridColumn: 'span 1', gridRow: 'span 1' }} delay={0.6} />

                    {/* Item 7: Small Square (New) */}
                    <BentoCard item={galleryItems[6]} style={{ gridColumn: 'span 1', gridRow: 'span 1' }} delay={0.7} />

                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.7 }}>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>To be continued... ❤️</p>
                </div>
            </div>
        </div>
    );
};

const BentoCard = ({ item, style, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ scale: 1.02 }}
            style={{
                ...style,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.5rem',
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
