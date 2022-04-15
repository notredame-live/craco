import React from 'react';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#000000" offset="0%" />
                  <stop stopColor="#000000" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#C99700" offset="0%" />
                  <stop stopColor="#C99700" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 font-red-hat-display text-gray-100">Thanks for stopping by!</h3>
              <br />
              <h3 className="text-sm font-red-hat-display text-gray-100">Have you checked out the Tip Portal?</h3>
              <br />
              
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
            <div className="relative flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-sm sm:px-4">
                      <input type="email" className="form-input w-full px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-green-500 text-xs" placeholder="contact@michaelcalendo.com" aria-label="Please provide your email " />
                      <a className="btn-sm text-white bg-teal-500 hover:bg-transparent border-2 border-green-500 dark:bg-ndblue-100 flex-shrink-0 hover:cursor-pointer" href="/__/tips">Tip Portal</a>
                      <svg className="hidden sm:block absolute left-full -mt-3" width="42" height="44" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path className="fill-current text-gray-600" d="M6.226 39.073l9.71 2.172-.436 1.951-13.436-3.004-1.735-.388 1.232-1.281 9.545-9.923 1.441 1.387-6.898 7.171 7.737-2.329C25.946 29.254 34.831 17.909 40.043.71l1.914.58c-5.378 17.746-14.651 29.572-27.818 35.393l-.117.043-7.796 2.347z" />
                      </svg>
                    </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;
