import React from 'react'
import Utilities from '../Utilities'
import './Filters.css'
export default function Filters(props: any) {
    let filterConfigs = Object.keys(props.filterConfigs)
    return (
        <div className='Filters'>
            <div className='Filters__flex'>
                {
                    filterConfigs.map((filter: String, index: Number) => {
                        return <Utilities.Filter
                            title={filter}
                            index={index}
                            options={props.options}
                        />
                    })
                }
            </div>
        </div>
    )
}