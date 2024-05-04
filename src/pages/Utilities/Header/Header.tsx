import React from 'react'
import './Header.css'
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