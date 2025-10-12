import { useState } from 'react'

export function Education() {
    const [schoolDetails,setSchoolDetails] = useState({
        schoolName:'Crowvard Law School',
        startMonth:'Crowly',
        startYear:'2010',
        endMonth:'Crowcember',
        endYear:'2017',
        courseOfStudy:'Application of Ancient Crow Law ',
        courseDescription:'Pecked a lot of shiny-paged books, ascended and decended large spiral towers.'

    })

    return (
        <>
            <div className="schoolDetails">
                <h3>Education</h3>
                <label htmlFor="schoolName">School Name</label>
                <input type="text" name="schoolName" onChange={(e) => handleSchoolName(e)} />
                <label htmlFor="startMonth">Start Month</label>
                <input type="text" name="startMonth" onChange={(e) => handleStartMonth(e)} />
                <label htmlFor="startYear">Start Year</label>
                <input type="text" name="startYear" onChange={(e) => handleStartYear(e)} />
                <label htmlFor="endMonth">End Month</label>
                <input type="text" name="endMonth" onChange={(e) => handleEndMonth(e)} />
                <label htmlFor="endYear">End Year</label>
                <input type="text" name="endYear" onChange={(e) => handleEndYear(e)} />
                <label htmlFor="courseOfStudy">Course of Study</label>
                <input type="text" name="courseOfStudy" onChange={(e) => handleCourseOfStudy(e)} />
            </div>
            <div className="schoolDetailsOut">
                <div className="courseOfStudy">{schoolDetails.courseOfStudy}</div>
                <div className="schoolName">{schoolDetails.schoolName}</div>
                <div className="attended">
                    {schoolDetails.startMonth + ', ' + schoolDetails.startYear + ' - ' + schoolDetails.endMonth + ', ' +schoolDetails.endYear}
                </div>
                <div className="courseDescription">{schoolDetails.courseDescription}</div>
            </div>
        </>
    )
}
export default Education