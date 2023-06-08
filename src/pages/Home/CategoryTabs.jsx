import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category1 from './Category/Category1';
import Category2 from './Category/Category2';
import Category3 from './Category/Category3';

const MyTabs = () => {
    const [category1, setCategory1] = useState([]);
    const [category2, setCategory2] = useState([]);
    const [category3, setCategory3] = useState([]);

    useEffect(() => {
        fetch('https://khelna-gari-server.vercel.app/category1')
            .then(res => res.json())
            .then(data => setCategory1(data))
    }, [])

    useEffect(() => {
        fetch('https://khelna-gari-server.vercel.app/category2')
            .then(res => res.json())
            .then(data => setCategory2(data))
    }, [])

    useEffect(() => {
        fetch('https://khelna-gari-server.vercel.app/category3')
            .then(res => res.json())
            .then(data => setCategory3(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mt-10 mb-8'>Shop by Category</h2>
            <Tabs className="flex items-center justify-center flex-col border border-teal-300">
                <TabList className="flex space-x-4 p-2 bg-gray-100">
                    <Tab className="px-4 py-2 bg-white rounded-md shadow-md hover:bg-teal-100 hover:cursor-pointer">Remote Control Cars</Tab>
                    <Tab className="px-4 py-2 bg-white rounded-md shadow-md hover:bg-teal-100 hover:cursor-pointer">Construction and Building Cars</Tab>
                    <Tab className="px-4 py-2 bg-white rounded-md shadow-md hover:bg-teal-100 hover:cursor-pointer">Transforming Cars</Tab>
                </TabList>

                <TabPanel className="p-4 bg-white">
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8'>
                        {
                            category1.map(item => <Category1 key={item._id} item={item}></Category1>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="p-4 bg-white">
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8'>
                        {
                            category2.map(item => <Category2 key={item._id} item={item}></Category2>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="p-4 bg-white">
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8'>
                        {
                            category3.map(item => <Category3 key={item._id} item={item}></Category3>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyTabs;