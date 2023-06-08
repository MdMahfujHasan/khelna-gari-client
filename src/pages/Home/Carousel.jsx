import React from 'react';

const Carousel = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mb-8 mt-10'>Happy Kids</h2>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEmbY7PaldpAduIASCNpKdaNrjWqh1DIZ2w&usqp=CAU" className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWN2KhnBrklZ0KveQiYcSX7PUokWjUUXXgw&usqp=CAU" className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiOWohCNX0r8wLxbezTFCL332aJxZhJjyFg&usqp=CAU" className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElIX5MAJSjVbZs05JqMNJl4nC2ONrMiUWPQ&usqp=CAU" className="w-full h-96" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;