import Form from "./Form";
import { CONTACTFIELDS, JOBHISTORYFIELDS, EDUCATIONFIELDS, SKILLFIELDS } from "../logic/data";

export default function App() {
    return (
        <>
          <Form name='Contact Info' fields={CONTACTFIELDS} addButton={false} />
          <Form name='Job History' id='jobHistory' fields={JOBHISTORYFIELDS} addButton={true} />
          <Form name='Education History' id='educationHistory' fields={EDUCATIONFIELDS} addButton={true} />
          <Form name='Skills' id='jobSkills' fields={SKILLFIELDS} addButton={true} />
        </>
    )
}