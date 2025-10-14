import { useState } from 'react'
import { Education } from './Education'
export function EducationHistory({eduElements}) {
    const [schoolDetails,setSchoolDetails] = useState({
        schoolName:'Crowvard Law School',
        startMonth:'Crowly',
        startYear:'2010',
        endMonth:'Crowcember',
        endYear:'2017',
        courseOfStudy:'Application of Ancient Crow Law ',
        courseDescription:'Pecked a lot of shiny-paged books, ascended and decended large spiral towers.'

    })
    const eduFunctions = {
        handleSchoolName:(e) => setSchoolDetails({
            ...schoolDetails,
            schoolName:e.target.value
        }),
        handleStartMonth: (e) => setSchoolDetails({
            ...schoolDetails,
            startMonth:e.target.value
        }),
        handleStartYear:(e) => setSchoolDetails({
            ...schoolDetails,
            startYear:e.target.value
        }),
        handleEndMonth:(e) => setSchoolDetails({
            ...schoolDetails,
            endMonth:e.target.value
        }),
        handleEndYear:(e) => setSchoolDetails({
            ...schoolDetails,
            endYear:e.target.value
        }),
        handleCourseOfStudy:(e) => setSchoolDetails({
            ...schoolDetails,
            courseOfStudy:e.target.value
        }),
        handleCourseDescription:(e) => setSchoolDetails({
            ...schoolDetails,
            courseDescription:e.target.value
        })
    }
    const listElements = eduElements.map((edu) => {
      return (
        <Education
          key={edu + eduElements.length}
          functions={eduFunctions}
          storage={schoolDetails}
        />
      )
    })
    return (
        <>
          {listElements}
        </>
    )
}
export default EducationHistory