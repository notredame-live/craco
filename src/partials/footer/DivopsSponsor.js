import React from 'react';

function DivopsSponsor() {
    return (
        <div>
            <div className="flex items-center justify-center">
                <img className="rounded-full mr-3" src={require('../../images/spaceship.svg').default} width="32" height="32" alt="Divops Logo" />
                <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 italics">Coming Soon</p>
                    {/* <span className="text-gray-600 text-sm dark:text-gray-400">On </span> */}
                    <p className="font-medium text-purple-500 hover:underline-gray-500 focus:blur">Divops Network</p>
                </div>
            </div>
        </div>
    )
}

export default DivopsSponsor
