import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../Redux/appSlice';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMail = () => {
    const [formData, setformData] = useState({
        to: "",
        subject: "",
        message: "",
    })
    const changeHandler = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"),
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                createdAt: serverTimestamp(),
            }
        )
        dispatch(setOpen(false));
        setformData({
            to: "",
            subject: "",
            message: "",
        })
    }

    const dispatch = useDispatch();
    const open = useSelector(store => store.appSlice.open);
    return (
        <div className={`${open ? 'block' : 'hidden'}  bg-white max-w-6xl shadow-slate-600 rounded-t-md`}>
            <div className="flex justify-between rounded-t-md  p-2 bg-blue-100 ">
                <h1> New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className="p-2  bg-blue-100  rounded-full hover:cursor-pointer  hover:bg-gray-100">
                    <RxCross2 size={"18px"} />

                </div>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2 ">
                <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder="To" className="outline-none py-1" />
                <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder="Subject" className="outline-none py-1" />
                <textarea onChange={changeHandler} value={formData.message} name="message" type="text" placeholder="Message....." cols={"30"} rows={"10"} className="outline-none py-1"> </textarea>
                <button type="submit" className="rounded-full w-fit px-4 py-2 text-white bg-blue-700  font-medium"> Send</button>

            </form>



        </div>
    )
}

export default SendMail;
