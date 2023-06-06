import React from 'react';
import cover from '../../assets/gallery-cover.jpg';

const GalleryCard = ({ item }) => {
    const { name, img } = item;
    return (
        <div>
            <div className="card card-compact w-80 bg-teal-50 h-80 shadow-xl">
                <figure><img src={img} alt="Toys" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl text-teal-300 font-extrabold text-center">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;