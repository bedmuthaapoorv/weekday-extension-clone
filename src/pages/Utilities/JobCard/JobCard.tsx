import React from 'react'
export default function JobCard(props: any) {
    return (
        <div>
            {props.date}
            <img src={props.logoUrl}></img>
            {props.companyName}
            {props.jobRole}
            {props.location}
            {props.minJdSalary}
            {props.maxJdSalary}
            {props.salaryCurrencyCode}
            {props.jobDetailsFromCompany}
            {props.minExp}
            {props.maxExp}
        </div>
    )
}