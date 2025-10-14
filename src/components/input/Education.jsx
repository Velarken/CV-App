import { useState } from 'react'

export function Education({functions,storage}) {

    return (
        <>
            <div className="schoolDetails">
                <h3>Education</h3>
                <label htmlFor="schoolName">School Name</label>
                <input type="text" name="schoolName" onChange={functions.schoolName} />
                <label htmlFor="startMonth">Start Month</label>
                <input type="text" name="startMonth" onChange={functions.startMonth} />
                <label htmlFor="startYear">Start Year</label>
                <input type="text" name="startYear" onChange={functions.startYear} />
                <label htmlFor="endMonth">End Month</label>
                <input type="text" name="endMonth" onChange={functions.endMonth} />
                <label htmlFor="endYear">End Year</label>
                <input type="text" name="endYear" onChange={functions.endYear} />
                <label htmlFor="courseOfStudy">Course of Study</label>
                <input type="text" name="courseOfStudy" onChange={functions.courseOfStudy} />
                <label htmlFor="courseDescription">Course Description</label>
                <textarea name="courseDescription" onChange={functions.courseDescription}></textarea>
            </div>
            <div className="schoolDetailsOut">
                <div className="courseOfStudy">{storage.courseOfStudy}</div>
                <div className="schoolName">{storage.schoolName}</div>
                <div className="attended">
                    {storage.startMonth + ', ' + storage.startYear + ' - ' + storage.endMonth + ', ' +storage.endYear}
                </div>
                <div className="courseDescription">{storage.courseDescription}</div>
            </div>
        </>
    )
}
export default Education