import React from 'react'
import Utilities from '../Utilities'
export default function Filters(props: any) {
    let filterConfigs = Object.keys(props.filterConfigs)
    console.log(props.options)
    return (
        <div>
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
    )
}