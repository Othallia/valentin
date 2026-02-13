import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const LandingPage = () => {
  return (
    <div className="container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Background Particles */}
      <FloatingParticles count={20} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: '4rem', maxWidth: '700px', border: '1px solid rgba(255,255,255,0.4)', position: 'relative', zIndex: 10 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ color: 'var(--white)', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.6))' }}
        >
          <Heart size={80} fill="currentColor" />
        </motion.div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: 'var(--white)', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
          Happy Anniversary
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          & Happy Valentine's Day
        </h2>
        <p style={{ fontSize: '1.4rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
          A journey through our amazing time together.
        </p>

        <Link to="/journey">
          <button style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: 'var(--blue-dark)',
            padding: '1.2rem 2.8rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}>
            Start Our Journey
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
