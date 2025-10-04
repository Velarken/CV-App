import '../styles/FormField.css'
export default function FormField(props) {
    let textArea = false
    let addSkills = false
    if (props.type === 'textarea') {
        textArea = true
    }
    if (props.type === 'button') {
        addSkills = true
    }
    return (
        <>
            {textArea ? 
              <div className="textareaSection">
                <label htmlFor={props.name} className='flexItem'>{props.text}</label>
                <textarea name={props.name}  className='flexItem'/> 
              </div>
              : null }
            {!textArea && !addSkills ?
              <div className="normalSection"> 
                <label htmlFor={props.name} className='flexItem'>{props.text}</label>
                <input type={props.type} name={props.name} className='flexItem'/> 
              </div>
            : null}
        </>
    )
}