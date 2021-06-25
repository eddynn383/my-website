import React from 'react'
import {Link} from 'react-scroll';

export default function Footer({newAttr}) {
    return (
        <footer className="flex flex-center justify-center px-20 py-5 bg-gray-800">
            <span>Powered by <Link to="about" {...newAttr} className="hover:text-green-500 cursor-pointer">Eduard Boboc</Link></span>
        </footer>
    )
}
