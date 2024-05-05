import React from 'react'
import './Header.css'
// Header UI which also shows the total jobs availaible on the platform
export default function Header(props: any) {
    return (
        <div className='Header__container'>
            <div className='Header'>
                Search Jobs
                <div className='Header__jobsCount'>
                    {props.jobsCount}
                </div>
            </div>
        </div>
    )
}