import React, { useEffect } from 'react'
import Utilities from '../Utilities/Utilities'
import { useState } from 'react'
import services from '../../services/services'
import './Home.css'
// Home Page
export default function Home() {
    // Details of all the jobs fetched from Weekday's API
    let [jobCards, setJobsCards] = useState<Array<any>>([])
    // Number of results returned in 1 page 
    let [limit, setLimit] = useState<Number>(10);
    // Page number
    let [offset, setOffset] = useState<Number>(0);
    // Set of different job roles availaible
    let [roleArray, setRoleArray] = useState<Array<any>>([])
    // Set of different Job Locations
    let [locationArray, setLocationArray] = useState<Array<any>>([])
    // Set of Different companies
    let [companyArray, setCompanyArray] = useState<Array<any>>([])
    // Total Number of Jobs on the platform
    let [jobsCount, setJobsCount] = useState<Number>(0)
    // Filters applied
    let [filterConfigs, setFilterConfigs] = useState<any>(services.config['filterConfigs']);
    // Availaible filters
    let [options, setOptions] = useState<any>(services.config['options'])
    useEffect(() => {
        // populate Jobs Data with data from the API, this function runs everytime limit and offset changes
        services.populateJobsData(limit, offset, filterConfigs, jobCards, setJobsCards, setJobsCount)
    }, [limit, offset])
    useEffect(() => {
        // change jobs visibility based on filters applied
        services.onFilterUpdate(jobCards, filterConfigs, setJobsCards)
    }, [filterConfigs])
    useEffect(() => {
        // populate options for different filters based on the jobs data received
        services.populateFilterOptions(jobCards, setRoleArray, setLocationArray, setCompanyArray)
    }, [jobCards])
    useEffect(() => {
        // update new options across components
        setOptions({ ...options, 'Role': roleArray, 'Location': locationArray, 'Company': companyArray })
    }, [roleArray, locationArray, companyArray])
    return (
        <div className='lexend'>
            <div className='Home__header'>
                <Utilities.Header jobsCount={jobsCount}></Utilities.Header>
                <Utilities.Filters
                    filterConfigs={filterConfigs}
                    setFilterConfigs={setFilterConfigs}
                    options={options}
                ></Utilities.Filters>
            </div>
            <Utilities.JobCards
                jobCards={jobCards}
                setLimit={setLimit}
                limit={limit}
                setOffset={setOffset}
                offset={offset}
            ></Utilities.JobCards>
        </div>
    )
}