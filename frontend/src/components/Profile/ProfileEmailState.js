import React, {useEffect} from "react";
import {useDispatch} from "react-redux";


const ProfileEmailState = ({emailItems}) => {

    const dispatch = useDispatch();

    console.log(emailItems);
    useEffect(() => {

    }, [dispatch, emailItems]);

    return (
        <>
            {emailItems.map(item => (
                <p key={item._id} >{item.name}</p>
            ))}
        </>
    )

};

export default ProfileEmailState