import React, { useEffect, useState } from 'react'
import OneMessage from './OneMessage'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../Redux/appSlice';

const Message = () => {
    const searchText = useSelector(store => store.appSlice.searchText);
    const emails = useSelector(store => store.appSlice.emails);
    const [tempEmails, setTempEmails] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((item, index) => ({ ...item.data(), id: item.id }));
            dispatch(setEmails(allEmails));

        });
        // clean up the timer when leave the message page.
        return () => unsubscribe();

    }, []);

    useEffect(() => {
        const filteredEmail = emails?.filter((item) => {
            return item?.subject?.toLowerCase().includes(searchText?.toLowerCase()) ||
                item?.to?.toLowerCase().includes(searchText?.toLowerCase()) ||
                item?.message?.toLowerCase().includes(searchText?.toLowerCase());

        })
        setTempEmails(filteredEmail);
    }, [searchText, emails]);

    return (
        <div>
            {
                (tempEmails?.length > 0 ? tempEmails : emails)?.map((item) => (
                    <OneMessage key={item.id} email={item} />
                ))
            }
        </div>
    )
}

export default Message;
