import React from 'react'
import Utilities from '../Utilities'
import './Filters.css'
// For populating the UI with different filters
export default function Filters(props: any) {
    // extracting filter names from filterConfigs in order to create a filter for each filter name
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
                            filterConfigs={props.filterConfigs}
                            setFilterConfigs={props.setFilterConfigs}
                        />
                    })
                }
            </div>
        </div>
    )
}