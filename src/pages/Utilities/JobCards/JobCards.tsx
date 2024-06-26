import React, { useEffect } from 'react'
import Utilities from '../Utilities'
import './JobCards.css'
// Flexbox for JobCards, 
export default function JobCards(props: any) {
    return (
        <div className='jobCards' >
            <div className='jobCards__flex' onScroll={(event) => {
                let obj: any = event.target
                // requesting a new page, if bottom of the current results is reached
                if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                    props.setOffset(props.offset + 1)
                }
            }}>
                {
                    props.jobCards.map((jobCard: any, index: Number) => {
                        return <Utilities.JobCard {...jobCard} index={index}></Utilities.JobCard>
                    })
                }
            </div>
        </div >
    )
}