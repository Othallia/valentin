import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { dates } from '../data/dates';
import { Calendar, Star, MessageCircle, Heart, ChevronLeft, ChevronRight, User, Sparkles, Infinity, X, Plane, Home, Clock, Camera, Store } from 'lucide-react';
import Footer from '../components/Footer';
import FloatingParticles from '../components/FloatingParticles';
import GlassNavigation from '../components/GlassNavigation';
import kindnessImg from '../assets/kindness.jpg';
import smileImg from '../assets/smile.jpg';
import supportImg from '../assets/support.jpg';
import catLoverImg from '../assets/cat_lover.jpg';
import beingYouImg from '../assets/being_you.jpg';
import bucketListImg from '../assets/bucket_list.jpg';
import whyYouImg from '../assets/why_you_real.jpg';
import aboutMeImg from '../assets/about_me.jpg';
import aboutYouImg from '../assets/about_you_new.jpg';
import heroBg from '../assets/hero-bg.jpg';
import couple3d from '../assets/couple_3d.png';
import howWeMetImg from '../assets/how_we_met.png';
import ourFutureImg from '../assets/our_future.png';

const JourneyPage = () => {
    const carouselRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Handle scroll based on state passed from Navigation Component
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Short timeout to ensure render
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                // Clean up state
                window.history.replaceState({}, document.title);
            }
        }
        // Legacy/Direct timeline support
        else if (location.hash === '#timeline') {
            const element = document.getElementById('timeline');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 350; // Approx card width + gap
            const currentScroll = carouselRef.current.scrollLeft;
            carouselRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const aboutItems = [
        {
            icon: <User size={32} />,
            title: "About Me",
            desc: "A little snippet about who I am, where I come from, and what makes me tick.",
            detailedDesc: "I love Hindia because of the deep meanings in their songs. I'm a fan of minimalism and always keep things simple. I enjoy my coffee and have a collection of jokes that don't always make sense.",
            img: aboutMeImg
        },
        {
            icon: <Heart size={32} />,
            title: "About You",
            desc: "The beautiful story of you. Your passions, your dreams, and everything that makes you special.",
            detailedDesc: "Her music taste is foreign to me, but she likes Hindia because of me. She is very soft-spoken, incredibly attentive, and truly gentle. I love you.",
            img: aboutYouImg
        },
        {
            icon: <Sparkles size={32} />,
            title: "How We Met",
            desc: "It all started with a scroll and a message.",
            detailedDesc: "I knew her because she followed me on Instagram. The first time I looked through her profile, I was instantly mesmerized. It took me a whole year to finally gather the courage to approach her.",
            img: howWeMetImg
        },
        {
            icon: <Infinity size={32} />,
            title: "Our Future",
            desc: "Building a life full of laughter, adventure, and endless love together.",
            detailedDesc: "We dream of living together in our ideal home, surrounded by our kittens, plants, and his toys. I want to dance in the kitchen and hug you in every corner of the house.",
            img: ourFutureImg
        }
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <GlassNavigation />

            {/* Intro Section - Full Screen Hero via Extended Gradient */}
            <section id="story" style={{
                height: '110vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Blurred Custom Background Image */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}>
                    {/* Image Container */}
                    <div style={{
                        width: '100%', height: '100%',
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(5px) brightness(0.6)',
                    }} />

                    {/* Ambient Particles */}
                    <FloatingParticles count={25} />

                    {/* Extended Gradient Overlay for seamless transition */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '500px',
                        background: 'linear-gradient(to bottom, transparent, #292F91)',
                        zIndex: 1
                    }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px', marginTop: '-5vh' }}
                >
                    <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'var(--white)', fontWeight: 800, textShadow: '0 4px 30px rgba(0,0,0,0.8)', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
                        Our Story.
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 3vw, 1.6rem)', color: 'rgba(255,255,255,0.95)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                        one DM, and now look at us. this is our story.
                    </p>

                    <Link to="/gallery">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                marginTop: '2rem',
                                padding: 'clamp(10px, 2.5vw, 15px) clamp(20px, 5vw, 40px)',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)',
                                borderRadius: '50px',
                                color: 'white',
                                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <Camera size={18} /> our photo dump
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {/* REASONS SECTION - Blue Gradient */}
            <section id="reasons" style={{
                scrollMarginTop: '100px',
                position: 'relative',
                zIndex: 5,
                marginTop: '-50px',
                background: 'linear-gradient(to bottom, #292F91, #3a4bd1)',
                paddingBottom: '2rem',
                overflow: 'hidden'
            }}>
                {/* Custom Particles for this section */}
                <FloatingParticles count={15} shapes={['star', 'heart']} colors={['rgba(255,255,255,0.2)', 'rgba(255,215,0,0.2)']} />

                <div className="container" style={{ padding: '0 1rem', paddingTop: '5rem', position: 'relative', zIndex: 10 }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: 'var(--white)', marginBottom: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                        <Star fill="var(--white)" size={28} /> Why You?
                    </h2>

                    {/* Navigation Buttons for Carousel */}
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => scrollCarousel('left')}
                            style={{
                                position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 20,
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                width: '50px', height: '50px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(5px)',
                                color: 'var(--white)',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}
                            className="glass-hover carousel-nav-btn"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={() => scrollCarousel('right')}
                            style={{
                                position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 20,
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '50%',
                                width: '50px', height: '50px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(5px)',
                                color: 'var(--white)',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}
                            className="glass-hover carousel-nav-btn"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Carousel Container */}
                        <div
                            ref={carouselRef}
                            className="carousel-container"
                            style={{
                                display: 'flex',
                                gap: '2rem',
                                overflowX: 'auto',
                                padding: '2rem 16px 4rem 16px',
                                scrollSnapType: 'x mandatory',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                scrollBehavior: 'smooth'
                            }}>
                            {[
                                {
                                    id: 1,
                                    title: "You Actually Put Up With Me",
                                    desc: "idk how you do it, but you handle my mood swings and all my weird quirks without ever making me feel like I'm too much. that's rare, and I don't take it for granted.",
                                    img: kindnessImg
                                },
                                {
                                    id: 2,
                                    title: "Your Smile",
                                    desc: "not even exaggerating seeing you happy genuinely makes my whole day better. your smile hits different every single time.",
                                    img: smileImg
                                },
                                {
                                    id: 3,
                                    title: "My Safe Place",
                                    desc: "whenever my head gets too loud and everything feels like too much, you're the one who brings me back. I genuinely don't know what I'd do without that.",
                                    img: supportImg
                                },
                                {
                                    id: 4,
                                    title: "Cat Whisperer",
                                    desc: "animals just know, and the way cats always go straight to you says everything. it's honestly one of the most endearing things about you.",
                                    img: catLoverImg
                                },
                                {
                                    id: 5,
                                    title: "Just You",
                                    desc: "it's not about being perfect it's just everything you are. your maturity, the way you handle things, every little thing that makes you you. I wouldn't change any of it.",
                                    img: beingYouImg
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -15, scale: 1.02 }}
                                    style={{
                                        minWidth: 'clamp(260px, 80vw, 350px)',
                                        height: 'auto',
                                        minHeight: '500px',
                                        padding: '1.5rem',
                                        scrollSnapAlign: 'center',
                                        background: 'transparent',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        border: 'none',
                                        boxShadow: 'none'
                                    }}
                                >
                                    {/* Image Placeholder */}
                                    <div style={{
                                        width: '100%',
                                        height: '250px', // Reduced height
                                        flexShrink: 0, // Prevent image from shrinking
                                        background: 'rgba(0,0,0,0.2)',
                                        borderRadius: '20px',
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {item.img ? <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> :
                                            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                                                <Heart size={48} style={{ marginBottom: '10px', opacity: 0.8 }} />
                                                <p style={{ fontSize: '1rem', fontWeight: 500 }}>Photo #{item.id}</p>
                                            </div>}
                                    </div>

                                    <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                        <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: 800 }}>{item.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: 400 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* INTERACTIVE & ANIMATED SCROLL HINT */}
                    <motion.div
                        onClick={() => scrollCarousel('right')}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        style={{
                            textAlign: 'center',
                            marginBottom: '4rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '10px'
                        }}
                        whileHover={{ scale: 1.05, color: '#fff' }}
                    >
                        swipe for more <ChevronRight size={20} />
                    </motion.div>
                </div>
            </section>

            {/* BUCKET LIST SECTION - Blue Background, Pink Cards */}
            <section id="bucket-list" style={{
                scrollMarginTop: '100px',
                position: 'relative',
                background: 'linear-gradient(to bottom, #3a4bd1, #4CA8DD)',
                padding: '6rem 0',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap', // Responsive wrapping
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 1rem'
                    }}>
                        {/* LEFT: 3D Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: '1 1 300px' }}
                        >
                            <div style={{
                                position: 'relative',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                height: 'clamp(280px, 50vw, 450px)',
                                width: '100%',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)',
                                    zIndex: 2
                                }} />
                                <img src={bucketListImg} alt="Couple Goal" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

                                {/* Floating Badge - Pink Emphasis */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                                    style={{
                                        position: 'absolute', bottom: '20px', right: '20px',
                                        background: 'rgba(255,255,255,0.95)',
                                        padding: '10px 20px',
                                        borderRadius: '20px',
                                        zIndex: 5,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                        color: '#4CA8DD',
                                        fontWeight: '800',
                                        fontSize: '0.9rem',
                                        display: 'flex', alignItems: 'center', gap: '5px',
                                        border: '2px solid #4CA8DD'
                                    }}
                                >
                                    <Heart size={16} fill="#4CA8DD" stroke="none" /> Future Us
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Content List */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ flex: '1 1 300px' }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '0.5rem' }}>Our Bucket List</h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                                It’s not just about the destination, it’s about who I’m with. Here’s to ticking these off, one by one.
                            </p>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {/* Item 1 */}
                                <div className="glass-hover" style={{
                                    background: 'rgba(76, 168, 221, 0.15)',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    border: '1px solid #4CA8DD',
                                    boxShadow: '0 4px 15px rgba(76, 168, 221, 0.2)'
                                }}>
                                    <div style={{
                                        background: '#4CA8DD',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        color: 'var(--white)',
                                        display: 'inline-flex'
                                    }}>
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, margin: 0, marginBottom: '5px' }}>See the World</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0 }}>passport stamps, photos everywhere, coming home exhausted but happy.</p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="glass-hover" style={{
                                    background: 'rgba(76, 168, 221, 0.15)',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    border: '1px solid #4CA8DD',
                                    boxShadow: '0 4px 15px rgba(76, 168, 221, 0.2)'
                                }}>
                                    <div style={{
                                        background: '#4CA8DD',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        color: 'var(--white)',
                                        display: 'inline-flex'
                                    }}>
                                        <Home size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, margin: 0, marginBottom: '5px' }}>Our Own Place</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0 }}>our place, our rules. ideally with a little garden for the cats.</p>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="glass-hover" style={{
                                    background: 'rgba(76, 168, 221, 0.15)',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    border: '1px solid #4CA8DD',
                                    boxShadow: '0 4px 15px rgba(76, 168, 221, 0.2)'
                                }}>
                                    <div style={{
                                        background: '#4CA8DD',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        color: 'var(--white)',
                                        display: 'inline-flex'
                                    }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, margin: 0, marginBottom: '5px' }}>Grow Old Together</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0 }}>still laughing at random stuff at 80. that's the whole plan.</p>
                                    </div>
                                </div>

                                {/* Item 4 */}
                                <div className="glass-hover" style={{
                                    background: 'rgba(76, 168, 221, 0.15)',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    border: '1px solid #4CA8DD',
                                    boxShadow: '0 4px 15px rgba(76, 168, 221, 0.2)'
                                }}>
                                    <div style={{
                                        background: '#4CA8DD',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        color: 'var(--white)',
                                        display: 'inline-flex'
                                    }}>
                                        <Store size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, margin: 0, marginBottom: '5px' }}>Build Something</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0 }}>whether it's a business or just a life we actually love — either way, together.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHY YOU SECTION */}
            <section id="why-you" style={{
                scrollMarginTop: '100px',
                position: 'relative',
                background: 'linear-gradient(to bottom, #4CA8DD, #4CA8DD)', /* Seamless blend */
                padding: '4rem 0 8rem 0',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '5rem',
                        flexWrap: 'wrap-reverse', /* Check layout: Text Left, Image Right requested. Default is Row. */
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 1rem'
                    }}>
                        {/* LEFT: Text & List Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: '1 1 500px' }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                                Why It's Always You
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                you make the hard days easier and the good days even better. not just my partner you're genuinely my favorite person.
                            </p>

                            {/* Two Column List similar to reference perks */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                {[
                                    "My Safe Place 🏠",
                                    "Best Listener 👂",
                                    "Partner in Crime 🕵️‍♀️",
                                    "My Biggest Hype 📣",
                                    "Calm to My Chaos 🧘‍♀️",
                                    "10/10 Hugs 🫂"
                                ].map((item, index) => (
                                    <div key={index} style={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        color: 'var(--white)', fontSize: '1.1rem', fontWeight: 500,
                                        background: 'rgba(255,255,255,0.1)', padding: '10px 15px', borderRadius: '12px'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', background: '#292F91', borderRadius: '50%' }}></div>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '15px 40px',
                                    background: '#292F91',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    border: 'none',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(41, 47, 145, 0.4)',
                                    display: 'flex', alignItems: 'center', gap: '10px'
                                }}
                            >
                                <Heart fill="white" size={20} /> only you
                            </motion.button>
                        </motion.div>

                        {/* RIGHT: Image with Arch Shape */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
                        >
                            <div style={{
                                position: 'relative',
                                width: 'clamp(240px, 70vw, 350px)',
                                height: 'clamp(310px, 90vw, 450px)',
                                borderRadius: '200px 200px 20px 20px',
                                overflow: 'hidden',
                                border: '8px solid rgba(255,255,255,0.2)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                            }}>
                                {/* Placeholder Gradient Image - REPLACE WITH PHOTO */}
                                <img
                                    src={whyYouImg}
                                    alt="Why You"
                                    style={{
                                        width: '100%', height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />

                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(41, 47, 145, 0.6), transparent)'
                                }} />
                            </div>

                            {/* Decorative dotted border (hidden on mobile) */}
                            <div className="arch-deco" style={{
                                position: 'absolute',
                                width: '370px', height: '470px',
                                borderRadius: '210px 210px 30px 30px',
                                border: '2px dashed rgba(255,255,255,0.3)',
                                zIndex: -1,
                                top: '-10px', right: '10px'
                            }} />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section id="about-us" style={{
                scrollMarginTop: '100px',
                background: 'linear-gradient(180deg, #4CA8DD 0%, #3a4bd1 100%)',
                padding: 'clamp(3rem, 8vw, 5rem) 0 clamp(4rem, 10vw, 8rem) 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--white)', fontWeight: 800, marginBottom: '1rem' }}>The Cast</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            starring... us. obviously.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        justifyContent: 'center'
                    }}>
                        {[
                            {
                                icon: <User size={32} />,
                                title: "Me",
                                desc: "a girl who's into Hindia, keeping things simple, and bad jokes that somehow still land.",
                                detailedDesc: "Hindia hits different because of the lyrics. I live minimally, drink coffee daily, and always have a random joke ready even if no one laughs.",
                                img: aboutMeImg
                            },
                            {
                                icon: <Heart size={32} />,
                                title: "You",
                                desc: "the girl with the niche music taste who treats me like I'm the only person in the room.",
                                detailedDesc: "Her music taste was foreign to me, but he's the one who got me into Hindia. Attentive, gentle, and always there. I love you.",
                                img: aboutYouImg
                            },
                            {
                                icon: <Sparkles size={32} />,
                                title: "How We Met",
                                desc: "Instagram. one scroll, one DM, and here we are.",
                                detailedDesc: "She followed me on Instagram. The first time I went through her profile, I was instantly hooked. Took me a whole year to actually work up the nerve to message first.",
                                img: howWeMetImg
                            },
                            {
                                icon: <Infinity size={32} />,
                                title: "The Plan",
                                desc: "cats, plants, and dancing in the kitchen.",
                                detailedDesc: "The dream is living together in a cozy place cats, plants, a corner for his stuff. I want to dance in the kitchen and hug you in every room.",
                                img: ourFutureImg
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    height: '100%',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{
                                    color: 'var(--white)',
                                    marginBottom: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    width: 'fit-content',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.6', flex: 1 }}>
                                    {item.desc}
                                </p>
                                <div
                                    onClick={() => setActiveModal(item)}
                                    style={{
                                        marginTop: '1.5rem',
                                        color: 'var(--white)',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '4px'
                                    }}
                                >
                                    read more →
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION - REFINED GLASS STYLE */}
            <section id="timeline" style={{
                scrollMarginTop: '100px',
                position: 'relative',
                padding: '6rem 0 0 0', /* Removed bottom padding so footer sits flush */
                background: 'linear-gradient(180deg, #3a4bd1 0%, #292F91 100%)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="container" style={{ flex: 1, paddingBottom: '5rem' }}>
                    <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', color: 'var(--white)', marginBottom: '1rem', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>The Timeline</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', maxWidth: '600px', margin: '0 auto' }}>Select a chapter to relive the memory</p>
                    </header>

                    <div className="timeline-grid">
                        {dates.map((date, index) => (
                            <motion.div
                                id={`timeline-card-${date.id}`}
                                key={date.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/date/${date.id}`}>
                                    <div className="glass-hover timeline-card">
                                        <div style={{
                                            background: 'linear-gradient(135deg, #292F91 0%, #4CA8DD 100%)',
                                            borderRadius: '50%',
                                            width: '70px',
                                            height: '70px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '1rem',
                                            color: 'var(--white)',
                                            border: '2px solid rgba(255,255,255,0.8)',
                                            boxShadow: '0 8px 20px rgba(41, 47, 145, 0.4)',
                                            fontSize: '1.6rem',
                                            fontWeight: '800',
                                            flexShrink: 0
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <h3 className="timeline-title">{date.title}</h3>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'rgba(255,255,255,0.8)',
                                            fontSize: '0.95rem',
                                            background: 'rgba(0,0,0,0.1)',
                                            padding: '5px 12px',
                                            borderRadius: '20px',
                                            marginTop: '0.8rem',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                        }}>
                                            <Calendar size={14} />
                                            <span>{date.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <style>{`
                        .timeline-grid {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 2rem;
                            max-width: 1200px;
                            margin: 0 auto;
                            padding: 0 1rem;
                        }
                        .timeline-card {
                            padding: 2.5rem 2rem;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            text-align: center;
                            cursor: pointer;
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(12px);
                            border-radius: 24px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                        }
                        .timeline-title {
                            font-size: 1.4rem;
                            margin-bottom: 0.5rem;
                            color: var(--white);
                            font-weight: 700;
                        }
                        @media (max-width: 700px) {
                            .timeline-grid {
                                grid-template-columns: 1fr;
                                gap: 1rem;
                                padding: 0 1rem;
                                max-width: 100%;
                            }
                            .timeline-card {
                                flex-direction: row;
                                align-items: center;
                                text-align: left;
                                padding: 1.5rem 2rem;
                                border-radius: 20px;
                                gap: 1.5rem;
                                min-height: 100px;
                            }
                            .timeline-title {
                                font-size: 1.2rem;
                                margin-bottom: 0.2rem;
                            }
                        }
                    `}</style>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.2rem',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        letterSpacing: '1px'
                    }}
                >
                    -- Wait for the next date --❤️
                </motion.div>

                {/* FOOTER OUTSIDE CONTAINER BUT INSIDE SECTION FOR FULL WIDTH */}

                <Footer />
            </section>

            {/* MODAL OVERLAY */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModal(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 100,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '20px'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))', /* Reference Image Style */
                                backdropFilter: 'blur(30px)',
                                WebkitBackdropFilter: 'blur(30px)',
                                padding: '3rem',
                                borderRadius: '30px',
                                maxWidth: '500px',
                                width: '90%',
                                position: 'relative',
                                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4)',
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                borderTop: '1px solid rgba(255, 255, 255, 0.7)',
                                borderLeft: '1px solid rgba(255, 255, 255, 0.7)'
                            }}
                        >
                            <button
                                onClick={() => setActiveModal(null)}
                                style={{
                                    position: 'absolute', top: '20px', right: '20px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    width: '40px', height: '40px',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(5px)'
                                }}
                            >
                                <X size={20} />
                            </button>

                            <div style={{
                                width: '80px', height: '80px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                color: 'white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                border: '1px solid rgba(255,255,255,0.3)'
                            }}>
                                {activeModal.icon}
                            </div>

                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--white)', textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>{activeModal.title}</h3>

                            {/* Modal Image */}
                            {activeModal.img && (
                                <div style={{
                                    width: '100%',
                                    height: '250px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                }}>
                                    <img
                                        src={activeModal.img}
                                        alt={activeModal.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', lineHeight: '1.7', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                {activeModal.detailedDesc}
                            </p>

                            <button
                                onClick={() => setActiveModal(null)}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    color: '#333',
                                    padding: '14px 35px',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer',
                                    border: 'none'
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default JourneyPage;
