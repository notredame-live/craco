import React from "react";
import { Link } from "react-router-dom";

    export default function HomeButton() {
        return (
            <div className='flex justify-start'>
                <Link className="btn-sm text-gray-500 dark:text-gold-200 hover:text-green-500 dark:hover:text-white bg-black bg-opacity-60 border-1 dark:bg-ndblue-100 dark:border-gold-200 dark:hover:border-gold-100 flex items-center border-shadowed dark:border-shadowed border-teal-500 focus:blur cursor-pointer" to="/">
                    <span>Home</span>
                    <span className="hover:text-gold-100">
                    </span>
                    
                </Link>
            </div>
        )
    }