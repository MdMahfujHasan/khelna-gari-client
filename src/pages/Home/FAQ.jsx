import React from 'react';

const FAQ = () => {
    return (
        <>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mb-8 mt-10'>Frequently Asked Questions</h2>
            <div className='w-1/2 mx-auto space-y-4'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What age group are these toy cars suitable for?
                    </div>
                    <div className="collapse-content">
                        <p>Our toy cars are designed for children aged 3 and above. However, some models may have small parts and require adult supervision.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are the toy cars made from safe materials?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! We prioritize the safety of our customers. All our toy cars are made from non-toxic and child-friendly materials, ensuring a safe playtime experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can these toy cars be used outdoors?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, many of our toy cars are suitable for both indoor and outdoor use. However, it's always recommended to check the product descriptions for specific recommendations regarding usage environments.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are the toy cars easy to assemble?
                    </div>
                    <div className="collapse-content">
                        <p> Most of our toy cars come pre-assembled and ready to play with. However, certain models may require minor assembly, but they usually come with detailed instructions for easy setup.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer any warranties on your toy cars?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, we stand by the quality of our products. All toy cars are backed by a standard manufacturer's warranty, covering any defects or issues that may arise. Please refer to our warranty policy for more details.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I return or exchange a toy car if it's not what I expected?
                    </div>
                    <div className="collapse-content">
                        <p>Certainly! We have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return or exchange the toy car within 30 days of receiving it. Please review our returns and exchanges page for more information.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are replacement parts available for the toy cars?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we understand that accidents can happen during playtime. We offer a range of replacement parts for our toy cars, including wheels, batteries, and accessories. Please contact our customer support team for assistance with specific replacement part requests.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;