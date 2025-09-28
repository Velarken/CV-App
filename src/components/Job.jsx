import { useState } from 'react'

function Job() {
    let componentArray = []
    const [componentCount,setComponentCount] = useState([]);
    const [skillCount,setSkillCount] = useState([]);
    const [businessName,setBusinessName] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    const [jobStartMonth,setJobStartMonth] = useState('')
    const [jobStartYear,setJobStartYear] = useState('')
    const [jobEndMonth,setJobEndMonth] = useState('')
    const [jobEndYear,setJobEndYear] = useState('')
    const [jobDescription,setJobDescription] = useState('')
    const [skillList,setSkillList] = useState([])
 

    function handleComponentCount(event) {
      event.preventDefault()
      setComponentCount(componentCount.concat([componentCount.length + 1]))
    }
    function handleSkillCount(event) {
      event.preventDefault()
      setSkillCount(skillCount.concat([skillCount.length + 1]))
    }
    function handleBusinessName(text) {
      setBusinessName(text)
    }
    function handleJobTitle(text) {
      setJobTitle(text)
    }
    function handleJobStartMonth(text) {
      setJobStartMonth(text)
    }
    function handleJobStartYear(number) {
      setJobStartYear(number)
    }
    function handleJobEndMonth(text) {
      setJobEndMonth(text)
    }
    function handleJobEndYear(number) {
      setJobEndYear(number)
    }
    function handleJobDescription(text) {
      setJobDescription(text)
    }
    function handleAddSkill(text) {
      setSkillList(skillList.concat([text]))
    }
    return (
        <>
          <button type="button" onClick={(event) => handleComponentCount(event)}>New Job</button>
          {componentCount.map((job) => {
           return (
            <form key={job}>
              <label htmlFor="businessName">Business Name</label>
              <input type="text" name="businessName" onChange={(event) => handleBusinessName(event.target.value)} />
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" name="jobTitle" onChange={(event) => handleJobTitle(event.target.value)} />
              <section id="yearsWorked">
                <div id={"startDate" + job}>
                  <label htmlFor="jobStartMonth">Start Month</label>
                  <input type="text" name="jobStartMonth" onChange={(event) => handleJobStartMonth(event.target.value)} />
                  <label htmlFor="jobStartYear">Start Year</label>
                  <input type="number" name="jobStartYear" onChange={(event) => handleJobStartYear(event.target.value)} />
                </div>
                <div id={"endDate" + job}>
                  <label htmlFor="jobEndMonth">End Month</label>
                  <input type="text" name="jobEndMonth" onChange={(event) => handleJobEndMonth(event.target.value)} />
                  <label htmlFor="jobEndYear">End Year</label>
                  <input type="number" name="jobEndYear" onChange={(event) => handleJobEndYear(event.target.value)} />
                </div>
              </section>
              <label htmlFor="jobDescription">Job Description</label>
              <textarea name='jobDescription' onChange={(event) => handleJobDescription(event.target.value)}/>
              <section id={'jobSkills' + job}>
                <button 
                  type="button" 
                  onClick={(event) => handleSkillCount(event)}
                >
                  Add Skill
                </button>
                {skillCount.map((skill) => {
                    return (
                        <div 
                          key={'skill' + skill} 
                          id={"skill" + skill}
                        >
                          <label htmlFor="skillName">Skill</label>
                          <input type="text" name="skillName" onChange={(event) => handleAddSkill(event.target.value)} />
                        </div>
                    )
                })}
              </section>
            </form>
           )
          })}

          <div className="showJobInfo">
            <h2>{jobTitle}</h2>
            <h3>{businessName}</h3>
            <h5>{jobStartMonth + ', ' +jobStartYear + ' - ' + jobEndMonth + ', ' + jobEndYear}</h5>
            <p>{jobDescription}</p>
            <ul>
              {skillList.map((skill) => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
        </>
    )
}

export default Job