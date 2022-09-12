import React, { Component, useState } from 'react'
import {IoIosSchool} from "react-icons/io"
import {IoRestaurantSharp} from "react-icons/io5"


const ShowcaseSection = () => {

    return (
      <div className='scale-[.75] mx-5 relative sm:scale-100 md:w-full md:mx-0 -mt-72 -top-24 z-[3] flex justify-center items-center'>
        <div className='max-w-[1240px] shrink my-28 bg-white shadow-md rounded-md p-6 flex flex-row '>
            <div className='bg-white ease-in duration-200 rounded-sm p-2 flex flex-row justify-center items-center m-3 sm:hover:shadow-lg sm:hover:bg-slate-50 hover:cursor-pointer'>
                <IoIosSchool size={`90px`} className='mr-5 ease-in duration-200'/>
                <div>
                  <h1 className='font-semibold text-lg'>Unsere Schule</h1>
                  <p>Jetzt mehr herausfinden</p>
                </div>
            </div>

            <div className='bg-white ease-in duration-200 rounded-sm p-2 flex flex-row justify-center items-center m-3 sm:hover:shadow-lg sm:hover:bg-slate-50 hover:cursor-pointer'>
                <IoRestaurantSharp size={`65`} className='mr-5'/>
                {/* //Id wir hier gesetzt, damit der Header nicht von der Navbar verdeckt wird */}
                <div >
                  <h1 className='font-semibold text-lg'>Die Mensa</h1>
                  <p id="aktuelles">Alle Informationen rund um die KANTine</p>
                </div>
            </div>
        </div>
      </div>
    )
  }


export default ShowcaseSection