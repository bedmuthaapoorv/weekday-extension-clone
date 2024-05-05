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
    let [filterConfigs, setFilterConfigs] = useState<any>({
        'Min experience': null,
        'Location': null,
        'Remote/on-site': null,
        'Company': null,
        'Role': null,
        'Min base pay': null
    });
    let [options, setOptions] = useState<any>({
        'Min experience': [
            { value: '2', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' }
        ],
        'Location': [],
        'Remote/on-site': [
            { value: 'Remote', label: 'Remote' },
            { value: 'In-office', label: 'In-office' }
        ],
        'Company': [],
        'Role': [],
        'Min base pay': [
            { value: '0', label: '0L' },
            { value: '1', label: '1L' },
            { value: '2', label: '2L' },
            { value: '3', label: '3L' },
            { value: '4', label: '4L' },
            { value: '5', label: '5L' },
            { value: '6', label: '6L' },
            { value: '7', label: '7L' },
            { value: '8', label: '8L' },
            { value: '9', label: '9L' },
            { value: '10', label: '10L' }
        ]
    })
    useEffect(() => {
        services.fetchJobsData(limit, offset).then(
            (res) => {
                let jobs = res['jdList']
                jobs.map((jobCard: any) => {
                    if (
                        (filterConfigs['Min experience'] ? jobCard['minExp'] >= filterConfigs['Min experience'] : true) &&
                        (filterConfigs['Location'] ? jobCard['location'] == filterConfigs['Location'] : true) &&
                        (filterConfigs['Remote/on-site'] ? (filterConfigs['Remote/on-site'].toLowerCase() == 'remote' ? jobCard['location'].toLowerCase() == 'remote' : jobCard['location'].toLowerCase() != 'remote') : true) &&
                        (filterConfigs['Company'] ? jobCard['companyName'] == filterConfigs['Company'] : true) &&
                        (filterConfigs['Role'] ? jobCard['jobRole'] == filterConfigs['Role'] : true) &&
                        (filterConfigs['Min base pay'] ? jobCard['minJdSalary'] >= filterConfigs['Min base pay'] : true)
                    ) {
                        jobCard['visibility'] = true
                        jobs.push(jobCard)
                    } else {
                        jobCard['visibility'] = false
                        jobs.push(jobCard)
                    }
                })
                setJobsCards([...jobCards, ...jobs])
                setJobsCount(res['totalCount'])
            }
        )
    }, [limit, offset])
    useEffect(() => {
        let jobs: Array<any> = []
        jobCards.map((jobCard) => {
            if (
                (filterConfigs['Min experience'] ? jobCard['minExp'] >= filterConfigs['Min experience'] : true) &&
                (filterConfigs['Location'] ? jobCard['location'] == filterConfigs['Location'] : true) &&
                (filterConfigs['Remote/on-site'] ? (filterConfigs['Remote/on-site'].toLowerCase() == 'remote' ? jobCard['location'].toLowerCase() == 'remote' : jobCard['location'].toLowerCase() != 'remote') : true) &&
                (filterConfigs['Company'] ? jobCard['companyName'] == filterConfigs['Company'] : true) &&
                (filterConfigs['Role'] ? jobCard['jobRole'] == filterConfigs['Role'] : true) &&
                (filterConfigs['Min base pay'] ? jobCard['minJdSalary'] >= filterConfigs['Min base pay'] : true)
            ) {
                jobCard['visibility'] = true
                jobs.push(jobCard)
            } else {
                jobCard['visibility'] = false
                jobs.push(jobCard)
            }
        })
        setJobsCards(jobs)
    }, [filterConfigs])
    useEffect(() => {
        let roles = new Set<String>()
        let locations = new Set<String>()
        let companies = new Set<String>()
        jobCards.forEach((jobCard) => {
            roles.add(jobCard['jobRole'])
            locations.add(jobCard['location'])
            companies.add(jobCard['companyName'])
        })
        setRoleArray(Array.from(roles).map((role) => {
            return { value: role, label: role }
        }))
        setLocationArray(Array.from(locations).map((location) => {
            return { value: location, label: location }
        }))
        setCompanyArray(Array.from(companies).map((company) => {
            return { value: company, label: company }
        }))
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