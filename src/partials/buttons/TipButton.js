import React from "react";
import { Link } from 'react-router-dom';

export default function TipButton() {
    return (
        <div>
            <Link to="/__/tips">
                <span>
                    {/* <img className="flex-shrink-0 mr-3 bg-transparent hover:border-green-500 cursor-pointer dark:hover:border-gold-100 ease-out" src={require('../../images/real-clover.svg').default} width="50" height="50" alt="Author J.C." /> */}
                </span>
            </Link>
        </>
    )
}
