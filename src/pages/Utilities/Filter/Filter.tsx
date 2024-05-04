import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import './Filter.css'
export default function Filter(props: any) {
    let optionsArray = props.options[props.title]
    const [selectedOption, setSelectedOption] = useState(null);
    let handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
        let filterConfigs = { ...props.filterConfigs }
        filterConfigs[props.title] = selectedOption['value']
        props.setFilterConfigs(filterConfigs)
    };

    return (
        <div key={props.index} className='Filter'>
            <Select
                className='Filter__dropdown'
                value={selectedOption}
                options={optionsArray}
                placeholder={props.title}
                onChange={handleChange}
            />
        </div>
    )
}