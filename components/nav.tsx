// nav.tsx
"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaDownload } from 'react-icons/fa'

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize() // Check on mount

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const pathname = usePathname();
    const resumePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/files/Resume_Yuheng_Chen_Purdue_ECE_PhD.pdf`

    const links = [
        { title: "Home", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/` },
        { title: "Industrial Experience", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/industrial-experience` },
        { title: "Research/Publications", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience` },
        { title: "News", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/news` }
    ];

    return (
        <nav className='bg-white py-4'>
            {isMobile ? <div className="relative block text-left ">
                <div className=' px-[2rem] flex items-center justify-between gap-5'>

                    <a
                        href={`${resumePath}`}
                        // download
                        target="_blank"
                        rel="noopener noreferrer"

                        className='flex items-center justify-center w-[5.5rem] h-[1.8rem] bg-gray-400 hover:bg-gray-600 text-white rounded-lg hover:bg-gray-700'
                    >
                        {/* <FaDownload className='mr-2' /> */}
                        Resume
                    </a>
                    <button
                        onClick={toggleDropdown}
                        className="text-gray-800 border-2 px-2 py-1 rounded-md hover:text-black font-medium text-sm uppercase tracking-wider"
                    >
                        Menu
                    </button>
                </div>

                {isOpen && (
                    <ul className="absolute z-10 right-5 mt-2 w-[16rem] bg-white border border-gray-300 rounded-md shadow-lg">
                        {links.map((link, index) => (
                            <li key={index} className="text-gray-800 hover:text-black font-medium">
                                <a
                                    href={link.url}
                                    className={`block px-4 py-2 text-sm uppercase tracking-wider ${pathname === link.url
                                        ? 'text-sky-600 font-semibold underline decoration-sky-500 underline-offset-4'
                                        : ''
                                        }`}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div> :
                <ul className='px-body1 flex justify-between space-x-10 3xl:text-[1.2rem] 4xl:text-[1.4rem] 5xl:text-[1.6rem]'>
                    {links.map((link, index) => (
                        <li key={index} className={`text-gray-800 hover:text-black font-medium 
                    `}>
                            <a href={link.url} className={`${pathname === link.url ? 'text-sky-600 font-[600] underline decoration-sky-500 underline-offset-4' : ''
                                }  uppercase tracking-wider`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <a
                        href={`${resumePath}`}
                        // download
                        target="_blank"
                        rel="noopener noreferrer"

                        className='flex items-center justify-center inline-block 

                         3xl:px-4 3xl:py-5  4xl:px-4 4xl:py-6 5xl:px-4 5xl:py-7

                        
                        h-[1.8rem] bg-gray-400 hover:bg-gray-600 text-white rounded-lg hover:bg-gray-700'
                    >
                        {/* <FaDownload className='mr-2' /> */}
                        Resume
                    </a>
                </ul>
            }


        </nav>
    );
};

export default Nav;



