import React from 'react';
import { Link } from 'react-router-dom';

function MoreButton() {
    return (
        <div>
           <Link className="btn-sm text-gray-500 dark:text-gold-200 hover:text-green-500 dark:hover:text-white bg-black bg-opacity-60 border-1 dark:bg-ndblue-100 dark:border-gold-200 dark:hover:border-gold-100 flex items-center border-shadowed dark:border-shadowed border-teal-500 focus:blur cursor-pointer" to="/contact">
                <span>Want more Johnny?{""}</span>
                <svg className="w-3 h-3 flex-shrink-0 mt-px ml-2 text-teal-500 dark:text-teal-500 text-lg" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                </svg>
            </Link>
        </div>
    )
}

export default MoreButton
