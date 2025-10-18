import '../styles/App.css'
import {useState} from 'react'
import uniqid from "uniqid";
import { Form } from './input/Form'
import { Resume } from './output/Resume'
import { TemplateLoader } from './TemplateLoader'

export default function App() {
  const [personalInfo,setPersonalInfo] = useState();
  const [sections,setSections] = useState();
  const [sectionOpen,setSectionOpen] = useState();
  const [resumeLayout,setResumeLayout] = useState();
  const [prevState,setPrevState] = useState(null);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]:e.target.value})
  }
  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest('.section-form');
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]:section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj
      }),
    });
  }
  function createForm(arrayName,object) {
    setPrevState(null);
    // Clone array instead of changing original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({...sections,[arrayName]:section})
  }
  const createEducationForm = () => {
    createForm('education', {
      degree:'',
      schoolName:'',
      location:'',
      startMonth:'',
      startYear:'',
      endMonth:'',
      endYear:'',
      isCollapsed:false,
      isHidden:false,
      id:uniqid()
    })
  }
  const createJobExperienceForm = () => {
    createForm('experience', {
      companyName:'',
      positionTitle:'',
      location:'',
      description:'',
      startMonth:'',
      startYear:'',
      endMonth:'',
      endYear:'',
      isCollapsed:false,
      isHidden:false,
      id:uniqid(),
    });
  }
  const setOpen = (sectionName) => setSectionOpen(sectionName);
  function removeForm(e) {
    const form = e.target.closest('.section-form');
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]:section.filter((item) => item.id !== id),
    });
  }
  function cancelForm(e) {
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest('section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]:section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }
        return form
      }),
    });
  }
  function toggleValue(e,key) {
    const sectionForm = e.target.closest('.section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionFrom.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]:section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({},form));
          form[key]= !form[key]
        }
        return form;
      })
    })
  }
  const toggleCollapsed = (e) => toggleValue(e,'isCollapsed');
  const toggleHidden = (e) => toggleValue(e,'isHidden');

    return (
        <div className='app'>
          <div className="edit-side">
            <Sidebar onGoToPage={setCurrentPage} page={currentPage}/>
            <div className="form-container">
              <TemplateLoader
                onTemplateLoad={() => {
                  setPersonalInfo(exampleData.personalInfo);
                  setSections(exampleData.sections);
                }}
                onClear={() => {
                  setPersonalInfo({
                    
                    fullName:'',
                    email:'',
                    phoneNumber:'',
                    address:''
                  });
                  setSections({education:[], experiences:[]});
                  setPrevState(null)
                }}
              />
              {currentPage === 'content' && (
                <>
                
                </>
              )}
            </div>
          </div>
        </div>
    )
}