import React from 'react';
import AppStore from '../components/AppStore/AppStore';
import ClientReview from '../components/ClientReview.js/ClientReview';
import Hero from '../components/Hero/Hero';
import MarqueeSlider from '../components/MarqueeSlider/MarqueeSlider';
import PlayWithWatch from '../components/PlayWithWatch/PlayWithWatch';
import WeeklyUpdate from '../components/WeeklyUpdate/WeeklyUpdate';

const Home = () => {
    return (
        <>
            {/* hero */}
            <Hero/>
            {/* hero */}

            {/* MarqueeSlider */}
            <MarqueeSlider/>
            {/* MarqueeSlider */}

            {/* AppStore */}
            <AppStore/>
            {/* AppStore */}

            {/* weekly update */}
            <WeeklyUpdate/>
            {/* weekly update */}

            {/* play with watch */}
            <PlayWithWatch/>
            {/* play with watch */}

            {/* Client review */}
            <ClientReview/>
            {/* Client review */}
        </>
    );
};

export default Home;