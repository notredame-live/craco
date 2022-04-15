import React from 'react';

function CardForm() {
    return (
        <div>
            <form className="max-w-xl mx-auto bg-black bg-opacity-10 rounded">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Name<span className="text-teal-500 dark:text-gold-200">*</span></label>
                    <input id="first-name" type="text" className="form-input w-full text-teal-500 dark:text-gold-100" placeholder="Enter a name to go by" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-300 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Email<span className="text-teal-500 dark:text-gold-200">*</span>
                      <span className="flex-row justify-content-between text-sm text-gray-500">{""} (Optional)</span>
                    </label>
                    <input id="last-name" type="text" className="form-input text-teal-500 dark:text-gold-100 w-full" placeholder="Enter your email" required />
                  </div>
                </div>
            </form>
        </div>
    )
}

export default CardForm
