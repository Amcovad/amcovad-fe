import Image from 'next/image'
import React from 'react'

const ActivityFeedCard = () => {
    return (
        <div className="pl-6 pr-5 py-3  border-b border-secondary-50 flex items-center gap-5">
            <div className="relative">
                <Image className="rounded-full w-16 h-16" width={80} height={80} objectFit="cover" src="/assets/dashboard/User-image3.jpg" alt="user avatar3" />
            </div>
            <div className="">
                <p className="pt-4 text-xs leading-4 text-secondary-600">
                    <span className="text-secondary-700 cursor-pointer font-semibold">Adeyemi Yusuf </span>
                    added a comment on your <span className="text-primary-600 cursor-pointer font-semibold">Who wants to be a millionaire </span>transaction
                </p>
                <p className="text-xs leading-3 text-secondary-600 pt-1">3 mins ago</p>
            </div>
        </div>
    )
}

export default ActivityFeedCard