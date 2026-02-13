import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Image, PlayCircle, X } from 'lucide-react';
import { dates } from '../data/dates';
import FloatingParticles from '../components/FloatingParticles';

const DatePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dateId = parseInt(id);

    const [direction, setDirection] = useState(0);
    const [selectedMedia, setSelectedMedia] = useState(null); // For lightbox

    // Find the current date content
    const currentDate = dates.find(d => d.id === dateId);
    const totalDates = dates.length;

    useEffect(() => {
        // Basic validation
        if (!currentDate) {
            navigate('/journey', { state: { scrollToTimeline: true } });
        }
        window.scrollTo(0, 0);
    }, [dateId, currentDate, navigate]);

    if (!currentDate) return null;

    const handleNext = () => {
        if (dateId < totalDates) {
            setDirection(1);
            navigate(`/date/${dateId + 1}`);
        } else {
            // Option to go back to start or show a final message
            navigate('/journey', { state: { scrollToTimeline: true } });
        }
    };

    const handlePrev = () => {
        if (dateId > 1) {
            setDirection(-1);
            navigate(`/date/${dateId - 1}`);
        } else {
            navigate('/journey', { state: { scrollToTimeline: true } });
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    // Helper to check if gallery exists
    const hasGallery = currentDate.gallery && currentDate.gallery.length > 0;

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0', position: 'relative' }}>

            <FloatingParticles count={20} colors={['rgba(255,255,255,0.2)', 'rgba(76, 168, 221, 0.3)']} />

            {/* Navigation Header */}
            <div style={{ position: 'fixed', top: 30, left: 30, zIndex: 10 }}>
                {/* BACK BUTTON POINTS TO TIMELINE WITH STATE */}
                <Link to="/journey" state={{ scrollToTimeline: true }}>
                    <button className="glass" style={{
                        padding: '12px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--white)',
                        fontWeight: 'bold',
                        background: 'rgba(255,255,255,0.15)'
                    }}>
                        <ArrowLeft size={20} /> Back
                    </button>
                </Link>
            </div>

            <AnimatePresence initial={false} custom={direction} mode='wait'>
                <motion.div
                    key={dateId}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="glass"
                    style={{ padding: '3.5rem', maxWidth: '850px', width: '100%', margin: '2rem 0', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative', zIndex: 1 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{
                            color: 'var(--white)',
                            background: 'rgba(255,255,255,0.2)',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Chapter {String(currentDate.id).padStart(2, '0')}
                        </span>
                        <h1 style={{ fontSize: '3rem', color: 'var(--white)', margin: '15px 0', fontWeight: '700' }}>{currentDate.title}</h1>
                        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.1rem' }}>{currentDate.date}</p>
                    </div>

                    {/* Main Media (Video/Image) */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'rgba(0,0,0,0.2)',
                        borderRadius: '16px',
                        marginBottom: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        overflow: 'hidden'
                    }}>
                        {currentDate.video ? (
                            <video
                                src={currentDate.video}
                                controls
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : currentDate.image ? (
                            <img src={currentDate.image} alt={currentDate.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <PlayCircle size={64} color="rgba(255,255,255,0.5)" style={{ marginBottom: '15px' }} />
                                <span style={{ opacity: 0.7 }}>Video Placeholder</span>
                            </div>
                        )}
                    </div>

                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--white)', textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: '300', marginBottom: '3rem' }}>
                        {currentDate.description}
                    </p>

                    {/* GALLERY SECTION */}
                    {hasGallery && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ color: 'var(--white)', fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>
                                Memories Gallery
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                gap: '15px'
                            }}>
                                {currentDate.gallery.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedMedia(item)}
                                        style={{
                                            aspectRatio: '1',
                                            background: 'rgba(0,0,0,0.3)',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        {item.src ? (
                                            item.type === 'video' ? (
                                                <video src={item.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <img src={item.src} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            )
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'rgba(255,255,255,0.5)' }}>
                                                {item.type === 'video' ? <PlayCircle size={32} /> : <Image size={32} />}
                                                <span style={{ fontSize: '0.8rem', marginTop: '5px' }}>{item.type}</span>
                                            </div>
                                        )}

                                        {/* Overlay Icon for Video */}
                                        {item.type === 'video' && (
                                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '10px' }}>
                                                <PlayCircle size={24} fill="white" />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <button onClick={handlePrev} style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem',
                            padding: '10px'
                        }}>
                            <ArrowLeft /> Previous
                        </button>

                        <button onClick={handleNext} style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            background: 'var(--white)', color: 'var(--blue-dark)',
                            padding: '14px 30px', borderRadius: '30px', fontSize: '1.1rem',
                            fontWeight: 'bold',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                            transition: 'transform 0.2s'
                        }}>
                            {dateId === totalDates ? 'Finish' : 'Next Date'} <ArrowRight />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'rgba(0,0,0,0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 1000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <button
                            onClick={() => setSelectedMedia(null)}
                            style={{
                                position: 'absolute', top: '30px', right: '30px',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none', borderRadius: '50%',
                                width: '50px', height: '50px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '90%', maxHeight: '90%' }}
                        >
                            {selectedMedia.src ? (
                                selectedMedia.type === 'video' ? (
                                    <video src={selectedMedia.src} controls autoPlay style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
                                ) : (
                                    <img src={selectedMedia.src} alt={selectedMedia.caption} style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
                                )
                            ) : (
                                <div style={{
                                    width: '300px', height: '300px',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', borderRadius: '20px'
                                }}>
                                    <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Media Placeholder</p>
                                    <p style={{ opacity: 0.7 }}>{selectedMedia.caption}</p>
                                </div>
                            )}
                            {selectedMedia.caption && (
                                <p style={{ color: 'white', textAlign: 'center', marginTop: '1rem', fontSize: '1.1rem' }}>{selectedMedia.caption}</p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default DatePage;
