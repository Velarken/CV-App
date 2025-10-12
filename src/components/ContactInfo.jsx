import { useState } from "react"
import { JobObject, jobArray } from "../logic/sectionDisplayLogic"

export default function ContactInfo() {

    const [jobList,setJobList] = useState([])

    function updateJobArray(newJob) {
        jobArray.push(newJob);
    }
    function handleAddJob(name,title,startMonth,startYear,endMonth,endYear,description) {
        let newJob = new JobObject(name,title,startMonth,startYear,endMonth,endYear,description);
        setJobList(jobList.concat(newJob));
        updateJobArray(newJob);
    }

    return (
        <>
        
        </>
    )
}