import React from 'react'
import './JobCard.css'
// Card UI showing all different Job Details 
export default function JobCard(props: any) {
    return (
        <div className='jobCard' key={props.index} style={
            /*Only show card if visibility is true*/
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

                <div className='jobCard__experienceFlex'>
                    <div className='jobCard__experienceLabel'>
                        {props.minExp ? "Minimum Experience" : ""}
                    </div>
                    <div className='jobCard__experience'>
                        {props.minExp ? props.minExp + " years" : ""}
                    </div>
                </div>
                <a><button className='jobCard__easyApply lexend'>Easy Apply</button></a>
            </div>
        </div>
    )
}