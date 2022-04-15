import React from 'react'

function AuthorTag() {
    return (
        <div>
            <div className="flex" data-aos="fade-down" data-aos-delay="300">
                <img className="rounded-full flex-shrink-0 mr-3" src={require('../images/dad.jpg').default} width="32" height="32" alt="Author J.C." />
                <div>
                    <span className="text-gray-400 dark:text-gray-400">A Blog By</span>
                    <h1 className="font-medium dark:text-white text-gray-50 hover:underline">Johnny Joe</h1>
                </div>
            </div>
        </div>
    )
}

export default AuthorTag
