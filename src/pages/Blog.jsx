import React from "react";

const Blog = () => {
  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-4xl text-center text-3xl font-semibold leading-9 text-gray-800">
        Join Our Blog Community
      </h1>
      <p className="lg:text-center text-base leading-normal mt-4  text-gray-600">
        If youre looking for random paragraphs, youve come to the right place.
      </p>
      <div className="md:flex items-start justify-between mt-12">
        <div className="md:w-1/2 lg:w-full">
          <div>
            <div className="relative">
              <img src="https://i.ibb.co/DKg5zHT/img-3.png" alt="stairs" />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Michael Jackson
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              A refresh token just helps you re-validate a user without them
              having to re-enter their login credentials multiple times. refresh
              token is advisable to store them securely, typically using secure
              HTTP-only cookies or encrypted storage mechanisms such as the
              browsers session storage or secure HTTP-only local storage.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <img src="https://i.ibb.co/HxkBZQM/img-1.png " alt="flower pot" />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Michael Jackson
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              Compare SQL and NoSQL databases?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
          <div>
            <div className="relative">
              <img src="https://i.ibb.co/8mP5tmS/img-2.png " alt="stairs" />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              James McFerson
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              What is MongoDB aggregate and how does it work?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              MongoDB Aggregation is a way of processing a large number of
              documents in a collection by means of passing them through
              different stages. This MongoDB Aggregation uses the Pipeline
              concept in the UNIX command, where the pipeline defines the
              possibility to perform an operation on few inputs and apply the
              output resulted as the input for the succeeding command, and it
              follows the same. MongoDB supports this idea in the aggregation
              framework.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <img src="https://i.ibb.co/dPBXFwY/img-4.png" alt="stairs" />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              James McFerson
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              What is express js? What is Nest JS?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
