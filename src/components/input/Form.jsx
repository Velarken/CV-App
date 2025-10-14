import {BasicInfoInput} from './BasicInfoInput'
import {JobHistory} from './JobHistory'
import {EducationHistory} from './EducationHistory'

export function Form({jobElements,eduElements,jobFunction,eduFunction}) {
    

  return (
      <>
          <BasicInfoInput 
          />
          <button onClick={jobFunction}>
            Add Job Section
          </button>
          <JobHistory 
            jobElements={jobElements}
          />
          <button onClick={eduFunction}>
            Add Education Section
          </button>
          <EducationHistory 
            eduElements={eduElements}
          />
      </>
  )
}
export default Form 