import React from 'react'
import './JobCard.css'
export default function JobCard(props: any) {
    console.log(props.visibility)
    return (
        <div className='jobCard' key={props.index} style={
            {
                display: props.visibility ? "inherit" : "none"
            }
        }>
            <div className='jobCard__flex'>
                <div className='jobCard__companyDetails'>
                    <img src={props.logoUrl} className='companyDetails__logo'></img>
                    <div className='companyDetails__textDetails'>
                        <a href={props.jdLink} target='_blank'><div className='textDetails__companyName'>{props.companyName}</div></a>
                        <div className='textDetails__jobRole'>{props.jobRole}</div>
                        <div className='textDetails__location'>{props.location}</div>
                    </div>
                </div>
                <div className='jobCard__salary'>Estimated Salary: {props.minJdSalary ? props.salaryCurrencyCode + " " + props.minJdSalary + " - " : ""}₹ {props.maxJdSalary} LPA ✅
                </div>
                <div className='jobCard__aboutCompanyLabel'>About Company</div>
                <div className='jobCard__aboutCompany'>{props.jobDetailsFromCompany}</div>
                <div className='jobCard__viewJob'>View job</div>
                <div className='jobCard__experienceLabel'>
                    Minimum Experience
                </div>
                <div className='jobCard__experience'>
                    {props.minExp} years
                </div>
                <a href={props.jdLink}><button>Easy Apply</button></a>
                <button>Unlock referrel asks</button>
            </div>
        </div>
    )
}