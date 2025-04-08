import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { BiArchiveIn } from 'react-icons/bi'
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { MdDeleteOutline, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { motion } from 'framer-motion';

const Mail = () => {
    const params = useParams();
    const deleteMailById = async (id) => {
        try {
            await deleteDoc(doc(db, "emails", id));
            navigate("/");

        }
        catch (error) {
            console.log(error);
        }
        alert("This mail is deleted successfully!!");
    }
    const Option = [
        {
            icon: <IoMdArrowBack size={"20px"} />
        },
        {
            icon: <BiArchiveIn size={"20px"} />
        },
        {
            icon: <MdOutlineReport />
        },
        {
            icon: <MdDeleteOutline size={"20px"} />
        },
        {
            icon: <MdOutlineMarkEmailUnread size={"20px"} />
        },
        {
            icon: <MdOutlineWatchLater size={"20px"} />
        },
        {
            icon: <MdOutlineAddTask size={"20px"} />
        },
        {
            icon: <MdOutlineDriveFileMove size={"20px"} />
        },
        {
            icon: <IoMdMore size={"20px"} />
        },

    ]
    const navigate = useNavigate();
    const { selectedEmail } = useSelector(store => store.appSlice);
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex-1 bg-white rounded-xl mx-5'>
            <div className="flex items-center justify-between px-4">
                <div className="flex py-2 items-center gap-2 text-gray-700">
                    {
                        Option.map((item, index) => {
                            return (
                                <div onClick={index === 0 ? () => navigate("/") : index === 3 ? () => deleteMailById(params.id) : undefined} key={index} className=" p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                                    {item.icon}
                                </div>

                            )

                        })
                    }


                </div>
                <div className="flex items-center gap-2">
                    <button className="hover:bg-gray-200 rounded-full hover:cursor-pointer"><MdKeyboardArrowLeft size={"24px"} /></button>
                    <button className="hover:bg-gray-200 rounded-full hover:cursor-pointer"><MdKeyboardArrowRight size={"24px"} /></button>
                </div>

            </div>
            <div className="h-[90vh] p-4 *:overflow-y-auto">
                <div className=" flex items-center justify-between bg-white gap-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl  font-medium">{selectedEmail?.subject} </h1>
                        <span className="text-sm rounded-md  bg-gray-200 px-2"> Inbox</span>
                    </div>
                    <div className="flex-none text-gray-400 my-5 text-sm">
                        <p>{new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
                    </div>
                </div>
                <div className="text-gray-500 text-sm ">
                    <h1>{selectedEmail?.to}</h1>
                    <span> to me </span>
                </div>
                <div className="my-10">
                    <p>{selectedEmail?.message}</p>
                </div>
            </div>

        </motion.div >
    )
}

export default Mail
