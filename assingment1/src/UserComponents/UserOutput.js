import React from 'react'
import './UsersChanges.css'

const useroutput = (props) =>{
    return (
        <div className='OutPut'>
            <p> current username: {props.username} </p>
            <p>This is paragraph number 1</p>
            <p>This is paragraph number 2</p>
        </div>
    )
}

export default useroutput;
