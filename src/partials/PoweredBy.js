import React from 'react';

    export default function PoweredBy() {
        return (
            <div className="md:flex md:items-center md:justify-between mt-5">
             {/* Author meta */}
             <div className="flex items-center justify-center">
              <img className="rounded-full mr-3" src={require('../images/dad.jpg').default} width="32" height="32" alt="Author 04" />
              <div>
                <p className="text-xl text-gray-600 dark:text-gray-400">Memories from a devoted   Notre Dame subway alumni;</p>
                <span className="text-gray-600 dark:text-gray-400">By </span>
                 <a className="font-medium text-gray-800 dark:text-gray-300 hover:underline">Johnny   Joe</a>
                 {/* <span className="text-gray-600 dark:text-gray-400"> · Dec 2nd, 2021</span> */}
               </div>
             </div>
           </div>
        )
    }