import React from 'react'

const Background = () =>{
    return(
        <div>
            <video className='object-cover' autoPlay muted loop id="myVideo">
                <source src="./Planner.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Background;