import React from 'react'
import { Parallax } from 'react-parallax'
import background from "../public/assets/images/Gebäude_Front.jpg";

const Hero = ({heading, message}) => {

  return (
    <div className='flex items-center justify-center mb-[10rem] bg-fixed bg-bottom bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2] custom-height'/>
        <div className="p-5 text-white z-[2] mt-[-5rem]">
            <p className='text-xl font-medium'>{message}</p>
            <h2 className='text-5xl font-bold py-5'>{heading}</h2>
            <button className="px-8 py-2 border mt-2  hover:text-[#f97316] hover:border-[#f97316] ease-in duration-200">Mehr Erfahren</button>
        </div>
    </div>
    
    // <Parallax bgClassName='bg-red-500' bgImage={"https://www.planet-wissen.de/natur/haustiere/katzen/katzen-intro-102~_v-HintergrundL.jpg"} className='relative h-[100vh]' strength={400}>
    //   <div className='flex items-center justify-center absolute h-[100vh]'>
    //       <div className="p-5 text-white z-[2] mt-[-5rem]">
    //         <p className='text-xl font-medium'>{message}</p>
    //         <h2 className='text-5xl font-bold py-5'>{heading}</h2>
    //         <button className="px-8 py-2 border mt-2">Mehr Erfahren</button>
    //     </div>
    //   </div>
    // </Parallax>
  )
}

export default Hero