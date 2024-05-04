import React, { useEffect } from 'react'
import Utilities from '../Utilities'
export default function JobCards(props: any) {
    return (
        <div>
            {
                props.jobCards.map((jobCard: any) => {
                    return <Utilities.JobCard {...jobCard}></Utilities.JobCard>
                })
            }
            <a href={props.jdLink}><button>Easy Apply</button></a>
            <button>Unlock referrel asks</button>
        </div>
    )
}