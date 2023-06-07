import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTabs from './CategoryTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
        </div>
    );
};

export default Home;