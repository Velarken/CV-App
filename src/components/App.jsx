import '../styles/App.css'
import Form from "./Form";
import { CONTACTFIELDS, JOBHISTORYFIELDS, EDUCATIONFIELDS, SKILLFIELDS } from "../logic/data";
import {BasicInfoInput} from './BasicInfoInput'
import {JobHistory} from './JobHistory'
import {Education} from './Education'

export default function App() {
    // write functions here to: 
      // control whether the form or display version shows
      // add additional Job component
      // add addtional Education component
    
    return (
        <>
          <BasicInfoInput />
          <JobHistory />
          <Education />
        </>
    )
}