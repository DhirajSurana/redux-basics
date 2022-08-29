import React from 'react'
import { useSelector } from "react-redux";

function Profile() {

    const { name, age, email } = useSelector((state => state.user.value))
    const themeColor = useSelector((state => state.theme.value))
    return (
        <div style={{ color: themeColor }}>
            <p>User: {name} </p>
            <p>Age: {age} </p>
            <p>Email: {email} </p>
        </div>
    )
}

export default Profile