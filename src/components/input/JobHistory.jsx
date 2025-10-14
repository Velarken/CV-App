import { useState } from 'react'
import { JobInput } from './JobInput'

export function JobHistory({jobElements}) {
    
    const [jobDetails,setJobDetails] = useState({
        businessName:'Crow & Crow, Crows at Law',
        location:'CrowTown, CrowVA',
        jobTitle:'Crowyer',
        startMonth:'Crowvember',
        startYear:'2018',
        endMonth:'Crowgust',
        endYear:'2021',
        description:'Ensured prompt responses to local Crow Council, argued against Crow revolution in Crowsylvania.'
    })
    const jobFunctions = {
        businessName:(e) => {
           setJobDetails({
            ...jobDetails,
            businessName:e.target.value
        })},
        location:(e) => {
          setJobDetails({
            ...jobDetails,
            location:e.target.value
        })},
        jobTitle:(e) => {
            setJobDetails({
                ...jobDetails,
                jobTitle:e.target.value
        })},
        startMonth:(e) => {
            setJobDetails({
                ...jobDetails,
                startMonth:e.target.value
        })},
        startYear:(e) => {
            setJobDetails({
                ...jobDetails,
                startYear:e.target.value
        })},
        endMonth:(e) => {
            setJobDetails({
                ...jobDetails,
                endMonth:e.target.value
        })},
        endYear:(e) => {
            setJobDetails({
                ...jobDetails,
                endYear:e.target.value
        })},
        description:(e) => {
            setJobDetails({
                ...jobDetails,
                description:e.target.value
        })}
    }
    const listElements = jobElements.map((job) => {
        return (
            <JobInput
                key={job.jobTitle + jobElements.length}
                functions={jobFunctions}
                storage={jobDetails}
            />
        )
    })
    return (
        <>
            {listElements}
        </>
    )
}
export default JobHistory