import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { CiCircleQuestion } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx';
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setsearchText, setUser } from '../../Redux/appSlice';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState("");
    const user = useSelector(store => store.appSlice.user);
    const dispatch = useDispatch();

    const signoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));

        }).catch((error) => {
            console.log(error);

        })
        alert("loggedOut Successfully!");

    }

    useEffect(() => {
        dispatch(setsearchText(search));

    }, [search]);

    return (
        <div className="flex items-center justify-between mx-3 h-16">
            <div className="flex items-center gap-10">
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover: bg-gray-100 cursor-pointer'>
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail </h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-60">
                <div className="px-2 py-2 rounded-full flex items:center bg-[#EAF1FB]">
                    <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input value={search}
                        onChange={(e) => setSearch(e.target.value)}

                        placeholder="Search email " type=" text" className="rounded-full  w-full bg-transparent outline-none px-1" />
                </div>
            </div>


            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer" >
                        <CiCircleQuestion size={"20px"} />
                    </div>


                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer" >
                        <CiSettings size={"20px"} />
                    </div>


                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer" >
                        <PiDotsNineBold size={"20px"} />
                    </div>
                    <div className=" relative  border-black rounded-full cursor-pointer" >

                        <img onClick={() => setToggle(!toggle)} className="rounded-full w-10 " src={user.photoURL} />
                        <AnimatePresence>
                            {
                                toggle && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        className="bg-purple-400 absolute right-2  z-20 shadow-lg rounded-md"
                                    >
                                        <p onClick={signoutHandler} className="p-2 underline"> LogOut</p>
                                    </motion.div>
                                )

                            }
                        </AnimatePresence>
                    </div>
                </div>


            </div>




        </div>


    )
}

export default Navbar;
