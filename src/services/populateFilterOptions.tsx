// Calculate possible options for each filter based on jobs data
export default function populateFilterOptions(jobCards: Array<any>, setRoleArray: any, setLocationArray: any, setCompanyArray: any) {
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
}