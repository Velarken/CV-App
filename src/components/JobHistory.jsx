import { useState } from 'react'

export function JobHistory() {
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
    function handleBusinessName(e) {
        setJobDetails({
            ...jobDetails,
            businessName:e.target.value
        })
    }
    function handleLocation(e) {
        setJobDetails({
            ...jobDetails,
            location:e.target.value
        })
    }
    function handleJobTitle(e) {
        setJobDetails({
            ...jobDetails,
            jobTitle:e.target.value
        })
    }
    function handleStartMonth(e) {
        setJobDetails({
            ...jobDetails,
            startMonth:e.target.value
        })
    }
    function handleStartYear(e) {
        setJobDetails({
            ...jobDetails,
            startYear:e.target.value
        })
    }
    function handleEndMonth(e) {
        setJobDetails({
            ...jobDetails,
            endMonth:e.target.value
        })
    }
    function handleEndYear(e) {
        setJobDetails({
            ...jobDetails,
            endYear:e.target.value
        })
    }
    function handleDescription(e) {
        setJobDetails({
            ...jobDetails,
            description:e.target.value
        })
    }

    return (
        <>
        <div className="jobInput">
            <h3>Employment</h3>
            <label htmlFor="businessName">Business Name</label>
            <input type="text" name="businessName" onChange={(e) => handleBusinessName(e)} />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" onChange={(e) => handleLocation(e)} />  
            <div className="employmentDates">
                <label htmlFor="startMonth">Start Month</label>
                <input type="text" name="startMonth" onChange={(e) => handleStartMonth(e)} />
                <label htmlFor="startYear">Start Year</label>
                <input type="text" name="startYear" onChange={(e) => handleStartYear(e)} />
                <label htmlFor="endMonth">End Month</label>
                <input type="text" name="endMonth" onClick={(e) => handleEndMonth(e)} />
                <label htmlFor="endYear">End Year</label>
                <input type="text" name="endYear" onClick={(e) => handleEndYear(e)} />
            </div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" onChange={(e) => handleJobTitle(e)} />
            <label htmlFor="description">Job Description</label>
            <input type="text" name="description" onChange={(e) => handleDescription(e)} />
            <label htmlFor="courseDescription">Course Description</label>
            <textarea name="courseDescription"></textarea>
        </div>

        <div className="jobOutput">
            <div className="businessInfo">
                {jobDetails.businessName + ' || ' + jobDetails.location}
            </div>
            <div className="employmentDatesOut">
                {jobDetails.startMonth + ', ' + jobDetails.startYear + ' - ' + jobDetails.endMonth + ', ' + jobDetails.endYear}
            </div>
            <div className="jobDesc">
                <div className="jobTitle">{jobDetails.jobTitle}</div>
                <div className="jobDescription">{jobDetails.description}</div>
            </div>
        </div>
        </>
    )
}
export default JobHistory