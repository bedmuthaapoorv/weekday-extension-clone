import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import './Filter.css'
// Dropdown Filter
export default function Filter(props: any) {
    // get availaible options for the filter
    let optionsArray = props.options[props.title]
    // to keep track of selected option
    const [selectedOption, setSelectedOption] = useState(null);
    // to update the selected option
    let handleChange = (selectedOption: any) => {
        // updating selected Option, this updates the filter UI
        setSelectedOption(selectedOption);
        let filterConfigs = { ...props.filterConfigs }
        filterConfigs[props.title] = selectedOption['value']
        // updating the filter value, this will be used to change visibility of jobs vbased on filters
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