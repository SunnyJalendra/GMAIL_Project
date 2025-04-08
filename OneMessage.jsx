import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiRestartLine, RiStarLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../Redux/appSlice'
import { motion } from 'framer-motion';

const OneMessage = (props) => {
    const email = props.email;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {

        dispatch(setSelectedEmail(email));

        navigate(`/mail/${email.id}`)

    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={openMail} className=" text-sm py-3 hover:shadow-md hover:cursor-pointer justify-between border-b border-gray-200 px-4 flex items-start">
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdCropSquare size={"20px"} />
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarLine size={"20px"} />
                </div>
                <div>
                    <h1 className="font-semibold">{email?.to}</h1>

                </div>
            </div>
            <div className="flex-1 ml-4">
                <p className='text-gray-600 truncate  inline-block mx-w-full'>{email?.message}</p>

            </div>
            <div className="flex-none text-gray-400 text-sm">
                <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>

            </div>




        </motion.div>
    )
}

export default OneMessage
