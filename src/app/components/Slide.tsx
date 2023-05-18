/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from 'react';
import { Datalist } from './data';

export default function Slide() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < Datalist.length - 1;
    const hasPrev = index < Datalist.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleBackClick() {
        if (hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = Datalist[index];
    return (
        <>
            <br />
            <h1 className="text-4xl text-center text-orange-500">Image Slider With React States</h1>
            <br />
            <div className='flex'>
                <button onClick={handleNextClick} className="rounded-xl hover:rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 block text-lg mx-auto text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-10">Next</button>
                <button onClick={handleBackClick} className="rounded-xl hover:rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 block text-lg mx-auto text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-10">Prev</button>
            </div>
            <br />
            <h2 className='text-xl'>
                <i>{sculpture.name} </i>
                <br /> {sculpture.artist}
            </h2>

            <h3 className='text-xl'>
                ({index + 1} of {Datalist.length})
            </h3>
            <button className='text-xl' onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p className='text-xl'>{sculpture.description}</p>}
            <img
                className='lg:h-[500px] md:h-[500px] h-[80px] lg:w-[500px] md:w-[500px] w-[80px] rounded-3xl'
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
