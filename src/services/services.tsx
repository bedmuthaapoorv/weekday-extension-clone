import fetchJobsData from "./fetchJobsData"
import config from "./config"
import populateJobsData from "./populateJobsData"
import onFilterUpdate from "./onFilterUpdate"
import populateFilterOptions from "./populateFilterOptions"
const services = {
    fetchJobsData: fetchJobsData,
    config: config,
    populateJobsData: populateJobsData,
    onFilterUpdate: onFilterUpdate,
    populateFilterOptions: populateFilterOptions
}

export default services