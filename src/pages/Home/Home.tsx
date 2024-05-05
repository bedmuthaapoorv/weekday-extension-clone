import React, { useEffect } from 'react'
import Utilities from '../Utilities/Utilities'
import { useState } from 'react'
import services from '../../services/services'
import './Home.css'
export default function Home() {
    let [jobCards, setJobsCards] = useState<Array<any>>([])
    let [limit, setLimit] = useState<Number>(10);
    let [offset, setOffset] = useState<Number>(0);
    let [roleArray, setRoleArray] = useState<Array<any>>([])
    let [locationArray, setLocationArray] = useState<Array<any>>([])
    let [companyArray, setCompanyArray] = useState<Array<any>>([])
    let [jobsCount, setJobsCount] = useState<Number>(0)
    let [filterConfigs, setFilterConfigs] = useState<any>(services.config['filterConfigs']);
    let [options, setOptions] = useState<any>(services.config['options'])
    useEffect(() => {
        services.populateJobsData(limit, offset, filterConfigs, jobCards, setJobsCards, setJobsCount)
    }, [limit, offset])
    useEffect(() => {
        services.onFilterUpdate(jobCards, filterConfigs, setJobsCards)
    }, [filterConfigs])
    useEffect(() => {
        services.populateFilterOptions(jobCards, setRoleArray, setLocationArray, setCompanyArray)
    }, [jobCards])
    useEffect(() => {
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