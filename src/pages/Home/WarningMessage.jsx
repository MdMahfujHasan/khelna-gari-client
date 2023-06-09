import React, { useState } from 'react';
import { BsFillHeartbreakFill } from 'react-icons/bs';

const WarningMessage = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-4 bg-yellow-100 rounded-lg flex items-center z-10">
            <p className="flex items-center">Sometimes the My Toys page shows an unexpected application error.<BsFillHeartbreakFill className='text-rose-500 mx-1 text-lg' />Reloading it a couple of times fixes it.</p>
            <button className="ml-2 btn btn-xs btn-error text-white" onClick={handleClose}>
                X
            </button>
        </div>
    );
};

export default WarningMessage;