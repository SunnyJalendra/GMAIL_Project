import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa';
import { GoTag } from 'react-icons/go';
import { IoMdMore, IoMdRefresh } from 'react-icons/io';
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Message from './Message';

const Inbox = () => {
    const [mailTypeSelected, setMailTypeSelected] = useState(0);
    const mailType = [
        {
            icon: <MdInbox size={"20px"} />,
            text: "Primary",
        },
        {
            icon: <GoTag size={"20px"} />,
            text: "Promotions"
        },
        {
            icon: <FaUserFriends size={"20px"} />,
            text: "Socials"
        },
    ]
    return (
        <div className="flex-1 bg-white rounded-xl mx-5">
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2 text-gray-700 py-2">
                    <div className="flex items-center gap-1">
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">

                        <IoMdRefresh size={"20px"} />
                    </div>
                    <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">

                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500"> 1-50 of 1547</p>
                    <button className="hover:bg-gray-200 rounded-full hover:cursor-pointer"><MdKeyboardArrowLeft size={"24px"} /></button>
                    <button className="hover:bg-gray-200 rounded-full hover:cursor-pointer"><MdKeyboardArrowRight size={"24px"} /></button>
                </div>
            </div>
            <div className='h-[90vh] overflow-y-auto'>
                <div className="flex items-center gap-1">
                    {
                        mailType.map((item, index) => {
                            return (
                                <button key={index}
                                    className={`${mailTypeSelected === index ? `border-b-3 border-b-blue-700 text-blue-600` : 'border-b-4 border-b-transparent'} flex hover:cursor-pointer  justify-center p-4 items-center gap-5 w-50  hover:bg-gray-100`}
                                    onClick={() => setMailTypeSelected(index)}>
                                    {item.icon}
                                    <span>{item.text}</span>

                                </button>



                            )
                        })
                    }


                </div>
                <Message />
            </div>

        </div >
    )
}

export default Inbox;
