import '../styles/App.css'
import {useState} from 'react'
import { Form } from './input/Form'
import { Resume } from './output/Resume'

export default function App() {
    // write functions here to: 
      // control whether the form or display version shows
      // add additional Job component
      // add addtional Education component
    const [jobArray,setJobArray] = useState([1])
    const [eduArray,setEduArray] = useState([1])
    const [isFormHidden,setIsFormHidden] = useState(false)
    function handleJobArray() {
      setJobArray([
        ...jobArray,
        1
      ])
    }
    function handleEduArray() {
      setEduArray([
        ...eduArray,
        1
      ])
    }
    function handleIsFormHidden() {
      setIsFormHidden(!isFormHidden)
    }

    return (
        <>
          <Form 
            jobElements={jobArray}
            eduElements={eduArray}
            jobFunctions={handleJobArray}
            eduFunctions={handleEduArray}
          />
          {/* <Resume

          /> */}
        </>
    )
}