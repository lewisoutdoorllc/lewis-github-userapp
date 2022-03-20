import React from 'react'
import UserContent from './UserContent'
import UserInput from './UserInput'

const Container = ({ changeTheme, userRef, setUser, dateSplit, months }) => {
    return (
        <div className='container'>

            <UserInput 
                userRef={userRef}
                setUser={setUser}
                changeTheme={changeTheme}
            />

            <UserContent 
                dateSplit={dateSplit}
                months={months}
            />
        </div>
    )
}

export default Container