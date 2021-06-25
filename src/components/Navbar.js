import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef } from 'react';
import {Link} from 'react-scroll';

export default function Navbar({setHeight, newAttr}) {
    const ref = useRef(null);

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, [ref]);

    return (
        <header ref={ref} className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="about" {...newAttr} className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl cursor-pointer">Eduard Boboc</Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <Link to="projects" {...newAttr} className="mr-5 hover:text-white cursor-pointer">Past Work</Link>
                    <Link to="skills" {...newAttr} className="mr-5 hover:text-white cursor-pointer">Skills</Link>
                    <Link to="testimonials" {...newAttr} className="mr-5 hover:text-white cursor-pointer">Testimonials</Link>
                </nav>
                <Link
                    to="contact"
                    {...newAttr}
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"> 
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </header>
    )
}
