export default function onFilterUpdate(jobCards: Array<any>, filterConfigs: any, setJobsCards: any) {
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
}