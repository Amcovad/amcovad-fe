import React from 'react'
import Link from 'next/link';

const FooterContactLink = ({ icon, link, name }) => {
    return (
        <li>
            <div className="flex cursor-pointer lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  lg:mb-0">
                    <span className="text-secondary-300">
                        {icon}
                    </span>
                </div>
                {link ?

                    <Link href={link} legacyBehavior>
                        <a>
                            <p className="font-normal text-secondary-300 leading-5 mt-2 lg:mt-0">
                                {name}
                            </p>
                        </a>
                    </Link>
                    :
                    <p className="font-normal text-secondary-300 leading-5 mt-2 lg:mt-0">
                        {name}
                    </p>
                }
            </div>
        </li>
    )
}

export default FooterContactLink
