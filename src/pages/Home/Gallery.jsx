import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mb-8'>Gallery</h2>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    gallery.map(item => <GalleryCard
                        key={item._id}
                        item={item}
                    ></GalleryCard>)
                }
            </div>
        </>
    );
};

export default Gallery;