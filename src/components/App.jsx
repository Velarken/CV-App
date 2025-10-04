import Form from "./Form";

export default function App() {
    const CONTACTFIELDS = [
        {type:'text',name:'firstName',label:'First Name:  '},
        {type:'text',name:'middleInitial',label:'Middle Initial:  '},
        {type:'text',name:'lastName',label:'Last Name:  '},
        {type:'text',name:'emailAddress',label:'Email Address:  '},
        {type:'tel',name:'phoneNumber',label:'Phone Number:  '},
        {type:'text',name:'streetAddress',label:'Street Address:  '},
        {type:'text',name:'city',label:'City / Township:  '},
        {type:'text',name:'state',label:'State / Province:  '},
        {type:'number',name:'zipCode',label:'Zip Code:  '}
    ]
    const JOBHISTORYFIELDS = [
        {type:'text',name:'businessName',label:'Business Name:  '},
        {type:'text',name:'jobTitle',label:'Job Title:  '},
        {type:'text',name:'startMonth',label:'Start Month:  '},
        {type:'number',name:'startYear',label:'Start Year:  '},
        {type:'text',name:'endMonth',label:'End Month:  '},
        {type:'number',name:'endYear',label:'End Year:  '},
        {type:'textarea',name:'jobDescription',label:'Job Description:  '},
        {type:'button',name:'addSkill',label:'Add Skill:  '}
    ]
    return (
        <>
          <Form name='Contact Info' fields={CONTACTFIELDS} addButton={false} />
          <Form name='Job History' id='jobHistory' fields={JOBHISTORYFIELDS} addButton={true} />
        </>
    )
}