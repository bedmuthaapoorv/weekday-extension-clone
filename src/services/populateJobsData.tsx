import services from "./services"
// add an extra visibility field to newly added jobs data fetched based on existing filters
export default function populateJobsData(limit: Number, offset: Number, filterConfigs: any, jobCards: Array<any>, setJobsCards: any, setJobsCount: any) {
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
}