import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
 
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90){
                setColor("white")
                setTextColor("black")
            } else {
                setColor("transparent")
                setTextColor("white")
            }
        }
        window.addEventListener("scroll", changeColor)
    },[])



  return (
    <div style={{background: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-200'>
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
            <Link style={{color: textColor}} className='font-bold text-4xl' href="/">
                <h1 style={{color: textColor, cursor: "pointer"}} className='font-bold text-5xl'>IKG</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 duration-200 text-lg font-medium custom-hover relative'>
                    <Link href="/">Home</Link>
                </li>
                <li className='p-4 duration-200 text-lg font-medium custom-hover relative'>
                    <Link href="/#aktuelles">Aktuelles</Link>
                </li>
                <li className='p-4 duration-200 text-lg font-medium custom-hover relative'>
                    <Link href="/school">Über uns</Link>
                </li>
                <li className='p-4 duration-200 text-lg font-medium custom-hover relative'>
                    <Link href="/#galerie">Gallerie</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div className='block sm:hidden z-20' onClick={handleNav}>
                {nav ? <AiOutlineClose style={{color: `${textColor}`}} size={20}/> : <AiOutlineMenu style={{color: `${textColor}`}} size={20}/>}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? "z-[4] sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/60 backdrop-blur-md text-center ease-in duration-200" :
                "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"}>
                <ul>
                    <li  onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/">Home</Link>
                    </li>
                    <li  onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/#aktuelles">Aktuelles</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/schule">Über uns</Link>
                    </li>
                    <li  onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href="/#galerie">Gallerie</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar