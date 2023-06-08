import React from 'react';

const Stat = () => {
    return (
        <>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mb-8 mt-6'>Stats</h2>
            <div className="stats shadow flex container mx-auto">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                            <rect x="10" y="30" width="180" height="40" rx="5" ry="5" fill="#FF0000" />
                            <circle cx="30" cy="70" r="15" fill="#000000" />
                            <circle cx="170" cy="70" r="15" fill="#000000" />
                            <rect x="60" y="10" width="80" height="40" rx="5" ry="5" fill="#0000FF" />
                            <rect x="70" y="20" width="60" height="20" fill="#FFFFFF" />
                        </svg>
                    </div>
                    <div className="stat-value text-success">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc">31 tasks remaining</div>
                </div>
            </div>
        </>
    );
};

export default Stat;