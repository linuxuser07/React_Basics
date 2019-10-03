import React from 'react'
import './UsersChanges.css'

const userInput = (props) => {
    return (
        <div className='userInputMain'>
            <div>
                <label>Input The username Here</label>
            </div>
            <input className='userInput' type='text' onChange={props.changedUser} value={props.username}></input>
        </div>
    )
}

export default userInput;