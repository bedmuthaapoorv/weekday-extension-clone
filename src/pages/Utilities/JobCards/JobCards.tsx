import React, { useEffect } from 'react'
import Utilities from '../Utilities'
import './JobCards.css'
export default function JobCards(props: any) {
    return (
        <div className='jobCards'>
            <div className='jobCards__flex'>
                {
                    props.jobCards.map((jobCard: any, index: Number) => {
                        return <Utilities.JobCard {...jobCard} index={index}></Utilities.JobCard>
                    })
                }
            </div>
        </div>
    )
}