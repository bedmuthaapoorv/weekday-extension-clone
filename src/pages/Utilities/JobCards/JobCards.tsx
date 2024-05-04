import React, { useEffect } from 'react'
import Utilities from '../Utilities'
import './JobCards.css'
export default function JobCards(props: any) {
    return (
        <div className='jobCards'>
            <div className='jobCards__flex'>
                {
                    props.jobCards.map((jobCard: any) => {
                        return <Utilities.JobCard {...jobCard}></Utilities.JobCard>
                    })
                }
            </div>
        </div>
    )
}