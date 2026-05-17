import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const LandingPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '1rem' }}>

      {/* Background Particles */}
      <FloatingParticles count={20} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: 'clamp(2rem, 8vw, 4rem)', maxWidth: '700px', width: '100%', border: '1px solid rgba(255,255,255,0.4)', position: 'relative', zIndex: 10 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ color: 'var(--white)', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.6))' }}
        >
          <Heart size={60} fill="currentColor" />
        </motion.div>

        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '0.5rem', color: 'var(--white)', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
          Happy Anniversary
        </h1>
        <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          &amp; Happy Valentine Day's Baby I love you to the moon and back. hope u love me like that too
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
          every moment we've been through, right here.
        </p>

        <Link to="/journey">
          <button style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: 'var(--blue-dark)',
            padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 6vw, 2.8rem)',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transitiion: 'all 0.3s ease'
          }}>
            let's go
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
