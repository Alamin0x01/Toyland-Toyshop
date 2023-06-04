import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-14'>
            <div>
                <h3 className='text-2xl font-semibold my-4'>1/ What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p><span className='font-bold'>Access Token:</span> An access token is a credential that is used to access protected resources on behalf of an authenticated user. It is typically a string of characters that represents the authorization granted to the user. Access tokens are time-limited and have a shorter lifespan compared to refresh tokens.</p>
                <p><span className='font-bold'>Refresh Token:</span> A refresh token is a long-lived credential used to obtain a new access token without requiring the user to re-authenticate. It is used to refresh the access token when it expires. Refresh tokens are usually valid for a longer period than access tokens.</p>
                <h4 className='text-xl my-3 font-semibold'>Works of access token and refresh token:</h4>
                <ul className="list-disc">
                    <li>The user provides their credentials to the authentication server.</li>
                    <li>The authentication server verifies the credentials and, if valid, generates an access token and a refresh token.</li>
                    <li>The client includes the access token in each request to the server's protected resources. The server verifies the access token to ensure the user has the necessary permissions to access the requested resource.</li>
                    <li>The access token has a limited lifespan. Once it expires, the client needs to obtain a new one to continue accessing protected resources.</li>
                    <li> To obtain a new access token, the client sends the refresh token to a token endpoint on the server. If the refresh token is valid, the server generates a new access token and, optionally, a new refresh token.</li>
                </ul>
                <h4 className='text-xl my-3  font-semibold'>Where should we store them on the client-side?</h4>
                <p>Access token usually stored in memory on the client-side. Storing them in memory makes them easily accessible for including in API requests.</p>
                <p>Refresh token store in an HTTP-only cookie or a secure storage mechanism provided by the operating system like: Keychain on macOS, Credential Locker on Windows.</p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold my-4'>2/ Compare SQL and NoSQL databases?</h3>
                <table className="table-auto border">
                    {/* head */}
                    <thead className='border'>
                        <tr>
                            <th></th>
                            <th className='border-e'>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='border'>
                            <th>1</th>
                            <td className='border-e'>SQL databases use a structured data model known as the relational model. Data is organized into tables with predefined schemas, consisting of rows and columns.</td>
                            <td>NoSQL databases use a variety of data models, including key-value, document, columnar, and graph. These models provide flexibility in handling unstructured, semi-structured, and varying data types.</td>

                        </tr>
                        {/* row 2 */}
                        <tr className='border'>
                            <th>2</th>
                            <td className='border-e'>QL databases have a rigid schema defined before data insertion. The schema specifies the structure, data types, and relationships between tables. Changes to the schema often require altering existing data.</td>
                            <td>NoSQL databases are schema-less or have a flexible schema. Each record/document can have a different structure, allowing for easy modification and evolution of the data model.</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td className='border-e'>SQL databases typically scale vertically by adding more resources to a single server. Scaling horizontally across multiple servers can be challenging due to the rigid structure and tight relationships between tables.</td>
                            <td>NoSQL databases are designed to scale horizontally by distributing data across multiple servers. They can handle large volumes of data and high read/write loads efficiently.</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className='text-2xl font-semibold my-4'>3/ What is express js? What is Nest JS</h3>
                <p><span className='font-bold'>Express.js</span> is a minimalist and flexible web application framework for Node.js, providing essential features for building web servers and APIs with simplicity and customization.</p>
                <p className='pt-3'><span className='font-bold'>NestJS</span> is a full-featured, TypeScript-based framework inspired by Angular, offering a structured and scalable approach for building server-side applications with features like dependency injection, decorators, modules, and a powerful routing system.</p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold my-4'>4/ What is MongoDB aggregate and how does it work?</h3>
                <p>MongoDB's aggregate function is a powerful tool that allows to perform advanced data processing and analysis operations on a collection.</p>
                <p> It works by taking an array of stages, each representing a specific data processing step, and processes them sequentially. The stages can perform operations like filtering, grouping, sorting, projecting, and aggregating data. By chaining these stages together, it can create complex data pipelines to manipulate and analyze data in MongoDB.</p>
            </div>
        </div>
    );
};

export default Blog;