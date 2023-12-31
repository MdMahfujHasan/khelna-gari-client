import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import CategoryTabs from './CategoryTabs';
import { Helmet } from 'react-helmet';
import Stat from './Stat';
import Carousel from './Carousel';
import FAQ from './FAQ';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Khelna Gari</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Stat></Stat>
            <Carousel></Carousel>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;