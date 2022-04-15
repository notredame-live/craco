import React from 'react';

function ContactDevForm() {
    return (
        <div>
            <div className="dark bg-gray-800 py-8 px-8 md:py-12 md:px-12 text-center text-gray-100" data-aos="fade-down">
                <div className="text-sm font-medium mb-6">If you are wanting to upgrade your company's website or landing page and are considering a more modern approach, feel free to contact the developer of this blog if you would like to learn more about progressive web applications, and what it would take to migrate your data. </div>
                <form>
                    <div className="relative flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-sm sm:px-4">
                      <input type="email" className="form-input w-full px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-green-500 text-xs" placeholder="notredamenetwork@pm.me" aria-label="Please provide your email " />
                      <a className="btn-sm text-white bg-teal-500 hover:bg-transparent border-2 border-green-500 dark:bg-ndblue-100  flex-shrink-0">Send Email</a>
                      <svg className="hidden sm:block absolute left-full -mt-3" width="42" height="44" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path className="fill-current text-gray-600" d="M6.226 39.073l9.71 2.172-.436 1.951-13.436-3.004-1.735-.388 1.232-1.281 9.545-9.923 1.441 1.387-6.898 7.171 7.737-2.329C25.946 29.254 34.831 17.909 40.043.71l1.914.58c-5.378 17.746-14.651 29.572-27.818 35.393l-.117.043-7.796 2.347z" />
                      </svg>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactDevForm
