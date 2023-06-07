import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    return (
        <div>
            {
                // allToys.map(toy =>)
            }
        </div>
    );
};

export default AllToys;