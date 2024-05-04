import React, { useEffect } from 'react'
import Utilities from '../Utilities/Utilities'
import { useState } from 'react'
import services from '../../services/services'
export default function Home() {
    let [jobCards, setJobsCards] = useState<Array<any>>([])
    let [limit, setLimit] = useState<Number>(10);
    let [offset, setOffset] = useState<Number>(0);
    let [roleArray, setRoleArray] = useState<Array<any>>([])
    let [locationArray, setLocationArray] = useState<Array<any>>([])
    let [companyArray, setCompanyArray] = useState<Array<any>>([])
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
            { value: 'Hybrid', label: 'Hybrid' },
            { value: 'In-office', label: 'In-office' }
        ],
        'Company': [],
        'Role': [],
        'Min base pay': [
            { value: '0L', label: '0L' },
            { value: '1L', label: '1L' },
            { value: '2L', label: '2L' },
            { value: '3L', label: '3L' },
            { value: '4L', label: '4L' },
            { value: '5L', label: '5L' },
            { value: '6L', label: '6L' },
            { value: '7L', label: '7L' },
            { value: '8L', label: '8L' },
            { value: '9L', label: '9L' },
            { value: '10L', label: '10L' }
        ]
    })
    useEffect(() => {
        services.fetchJobsData(limit, offset).then(
            (res) => {
                setJobsCards(res)
            }
        )
    }, [limit, offset])
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
    // console.log(roleArray)
    return (
        <div>
            <Utilities.Header></Utilities.Header>
            <Utilities.Filters
                filterConfigs={filterConfigs}
                setFilterConfigs={setFilterConfigs}
                options={options}
            ></Utilities.Filters>
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