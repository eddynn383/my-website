import React from 'react';
import {Link} from 'react-scroll';

export default function About({newAttr}) {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, i'm Eduard Boboc
                        <br className="hidden lg:inline-block"/>
                        I love to build amazing Apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm an active person with sense of humor and very sociable. I like the challenges and always I try to exceed them. At first job in
                        IT I learned what a CMS is and what it does. At the beginning I worked only with the management of the website content, after
                        3 months I'm was promoted to a Front End position where I learned to work with CSS, SASS, Javascript, Jquery. I can
                        estimate the implementation work time of an project based on its difficulty and respect the project dead line. I have the
                        capacity to write and read the code for and from someone else, I like to be very organized. I'm a animal lover and I like to do
                        creative things, like the digital artworks, graphic design, web design, 3d modeling
                    </p>
                    <div className="flex justify-center"> 
                        <Link to="contact" {...newAttr} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition duration-300 cursor-pointer">Work With Me</Link>
                        <Link to="projects" {...newAttr} className="ml-4 inline-flex text-grey-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 bg-opacity-50 rounded text-lg transition duration-300 cursor-pointer">See My Past Work</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" src="./coding.svg" alt="hero"/>
                </div>
            </div>
        </section>
    )
}
