import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Circle, Music } from 'lucide-react';

const FloatingParticles = ({ count = 15, colors = ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)'], shapes = ['heart', 'sparkle'] }) => {
    // Helper to get icon component
    const getIcon = (type, size) => {
        switch (type) {
            case 'heart': return <Heart size={size} fill="currentColor" />;
            case 'sparkle': return <Sparkles size={size} />;
            case 'star': return <Star size={size} fill="currentColor" />;
            case 'circle': return <Circle size={size} fill="currentColor" />;
            case 'music': return <Music size={size} />;
            default: return <Sparkles size={size} />;
        }
    };

    // Generate random particles
    const particles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // Random percentage for x position
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
        size: 10 + Math.random() * 20,
        type: shapes[Math.floor(Math.random() * shapes.length)]
    }));

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: '110vh', x: `${p.x}vw`, opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 0.8, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        color: colors[Math.floor(Math.random() * colors.length)],
                    }}
                >
                    {getIcon(p.type, p.size)}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingParticles;
