export function JobInput({functions,storage,isHidden}) {
  
    return (
        <>
          <div className="jobInput">
            <h3>Employment</h3>
            <label htmlFor="businessName">Business Name</label>
            <input type="text" name="businessName" onChange={functions.businessName} />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" onChange={functions.location} />  
            <div className="employmentDates">
                <label htmlFor="startMonth">Start Month</label>
                <input type="text" name="startMonth" onChange={functions.startMonth} />
                <label htmlFor="startYear">Start Year</label>
                <input type="text" name="startYear" onChange={functions.startYear} />
                <label htmlFor="endMonth">End Month</label>
                <input type="text" name="endMonth" onClick={functions.endMonth} />
                <label htmlFor="endYear">End Year</label>
                <input type="text" name="endYear" onClick={functions.endYear} />
            </div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" onChange={functions.jobTitle} />
            <label htmlFor="description">Job Description</label>
            <input type="text" name="description" onChange={functions.description} />
          </div>
          <div className="jobOutput">
            <div className="businessInfo">
                {storage.businessName + ' || ' + storage.location}
            </div>
            <div className="employmentDatesOut">
                {storage.startMonth + ', ' + storage.startYear + ' - ' + storage.endMonth + ', ' + storage.endYear}
            </div>
            <div className="jobDesc">
                <div className="jobTitle">{storage.jobTitle}</div>
                <div className="jobDescription">{storage.description}</div>
            </div>
        </div>
        </>
    )
}

export default JobInput