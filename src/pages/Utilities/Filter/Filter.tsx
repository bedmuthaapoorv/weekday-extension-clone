import React from 'react'
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
export default function Filter(props: any) {
    //console.log(props)
    let optionsArray = props.options[props.title]
    // const optionsArray = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ];
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div key={props.index} className='Filter'>
            <Select
                className='Filter__dropdown'
                value={selectedOption}
                options={optionsArray}
                placeholder={props.title}
            />
        </div>
    )
}