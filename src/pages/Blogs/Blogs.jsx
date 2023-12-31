import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-6 mb-5'>
            <Helmet>
                <title>Blogs | Khelna Gari</title>
            </Helmet>
            <div>
                <h2 className='text-2xl text-teal-500 font-serif'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-slate-500 font-medium'>Access tokens and refresh tokens are commonly used in authentication systems.</p>
                <p className='text-slate-500 font-medium'>An access token is a credential that is used to authenticate and authorize requests to access protected resources, such as APIs or server endpoints. It is typically a string that is generated by the server upon successful authentication and is then included in subsequent requests to prove the client's identity.</p>
                <p className='text-slate-500 font-medium'>A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is usually issued alongside the access token and stored securely on the client-side.</p>
                <br />
                <p className='text-slate-500 font-medium'>The workflow for using access tokens and refresh tokens typically involves the following steps:</p>
                <p className='text-slate-500 font-medium'>The client authenticates with the server using their credentials (e.g., username and password).
                    Upon successful authentication, the server issues an access token and a refresh token to the client.
                    The client includes the access token in the Authorization header of subsequent API requests.
                    If the access token expires, the client can use the refresh token to request a new access token from the server.
                    The server verifies the refresh token and issues a new access token if the refresh token is valid.
                    Regarding storage on the client-side, access tokens should be stored securely to prevent unauthorized access. They are commonly stored in browser cookies, local storage, or session storage. However, it's important to consider security implications and follow best practices. Refresh tokens, on the other hand, should be stored securely, preferably in an httpOnly cookie, to mitigate the risk of cross-site scripting attacks.</p>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl text-teal-500 font-serif'>2. Compare SQL and NoSQL databases.</h2>
                <p className='text-slate-500 font-medium'>SQL and NoSQL are two different types of databases that have different approaches to storing and retrieving data.</p>
                <p className='text-slate-500 font-medium'>SQL databases: SQL databases (e.g., MySQL, PostgreSQL, SQLite) are based on a structured query language (SQL) and follow a relational data model.
                    They use tables with predefined schemas to store data in rows and columns.
                    SQL databases enforce data integrity and support complex queries using SQL.
                    They are suitable for applications with well-defined schemas, strong consistency requirements, and complex relationships between entities.</p>
                <p className='text-slate-500 font-medium'>NoSQL databases: NoSQL databases (e.g., MongoDB, CouchDB, Redis) have a flexible schema and do not rely on SQL as the primary query language.
                    They use various data models, including key-value pairs, documents, graphs, or wide-column stores.
                    NoSQL databases prioritize scalability, high availability, and partition tolerance.
                    They are suitable for applications with evolving schemas, high scalability needs, and a need for fast read and write operations.</p>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl text-teal-500 font-serif'>3. What is Express.js and Nest.js?</h2>
                <p className='text-slate-500 font-medium'>Express.js and Nest.js are both web application frameworks used for building server-side applications in JavaScript or TypeScript.</p>
                <p className='text-slate-500 font-medium'>Express.js: Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and lightweight approach to building web servers and APIs. Express.js is often referred to as a "micro" framework because it focuses on providing core features while allowing developers to choose and integrate additional libraries or components as needed. It offers routing, middleware support, and various features for handling HTTP requests and responses. Express.js has a large and active community, making it a popular choice for building web applications and APIs.</p>
                <p className='text-slate-500 font-medium'>Nest.js: Nest.js is a framework for building scalable and maintainable server-side applications with TypeScript. It is built on top of Express.js and provides an opinionated architecture inspired by Angular, making it suitable for large-scale applications. Nest.js uses decorators, dependency injection, and modules to structure applications and promote code reusability. It supports features like routing, middleware, validation, authentication, and more out of the box. Nest.js also integrates well with other libraries and frameworks, enabling developers to build robust and enterprise-grade applications.</p>
            </div>
            <div className='mt-4'>
                <h2 className='text-2xl text-teal-500 font-serif'>4. What is MongoDB aggregate and how does it work?</h2>
                <p className='text-slate-500 font-medium'>In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on collections of documents. It allows you to perform calculations, transformations, and aggregations on the data stored in your MongoDB database.</p>
                <p className='text-slate-500 font-medium'>The aggregate operation takes an array of stages as input, where each stage represents a specific data processing step. The stages are executed sequentially, with the output of one stage serving as the input to the next stage. Each stage can perform various operations such as filtering documents, grouping documents, sorting, projecting fields, performing mathematical operations, joining collections, and more.</p>
                <p className='text-slate-500 font-medium'>Here is a high-level overview of the stages commonly used in the aggregation pipeline:</p>
                <p className='text-slate-500 font-medium'>
                    $match: This stage filters the documents based on specified criteria. It works similar to the find operation and uses query expressions to match documents.
                    <br />
                    $group: This stage groups documents together based on a specified key or set of keys. It allows you to perform aggregation operations like sum, count, average, and more on the grouped data.
                    <br />
                    $project: This stage reshapes the documents by including, excluding, or transforming fields. It allows you to specify the fields that you want to include or exclude from the result.
                    <br />
                    $sort: This stage sorts the documents based on specified criteria. It can be used to sort the result in ascending or descending order.
                    <br />
                    $limit and $skip: These stages limit the number of documents in the result or skip a certain number of documents.
                    <br />
                    $lookup: This stage performs a left outer join with another collection and combines matching documents into a single result.
                    <br />
                    $unwind: This stage deconstructs an array field from the input documents, creating a separate document for each element in the array.</p>
            </div>
        </div>
    );
};

export default Blogs;