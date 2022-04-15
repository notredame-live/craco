import React from "react";

    export default function GreenButton() {
        return (
            <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
               <div className="flex mt-12 md:mt-16">
                <a className="btn-sm text-gray-500 dark:text-gold-200 hover:text-green-500 dark:hover:text-white bg-black bg-opacity-60border-1 dark:bg-ndblue-100 dark:border-gold-200 dark:hover:border-gold-100 flex items-center border-shadowed dark:border-shadowed border-teal-500 focus:blur cursor-pointer">
                  <span>More Posts</span>
                  <svg className="w-4 h-4 flex-shrink-0 ml-3 text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-teal-500" d="M14.7 9.3l-1.4-1.4L9 12.2V0H7v12.2L2.7 7.9 1.3 9.3 8 16z" />
                  </svg>
                </a>
              </div>
            </div>
        )
    }