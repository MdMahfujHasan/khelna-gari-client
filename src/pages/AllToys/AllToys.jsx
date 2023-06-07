import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const [search, setSearch] = useState('');
    const allToys = useLoaderData();
    console.log(allToys)
    return (
        <div>
            <div className='flex justify-center items-center'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search toy by name"
                    className="input input-sm w-1/3 focus:outline-0 border border-teal-300 my-2"
                />
            </div>
            <table className="table">
                <thead className='flex justify-around'>
                    <th>Photo</th>
                    <th>Toy Name</th>
                    <th>Sub-category</th>
                    <th>Seller Name</th>
                    <th>Toy Price</th>
                    <th>Available Quantity</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr className='space-y-2'>
                        {
                            allToys.filter((toy) => {
                                return search.toLowerCase() === '' ? toy : toy.toyName.toLowerCase().includes(search)
                            }).map(toy => <ToyTable
                                key={toy._id}
                                toy={toy}
                            ></ToyTable>)
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;