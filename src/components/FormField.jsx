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
              <>
                <label htmlFor={props.name}>{props.text}</label>
                <textarea name={props.name} /> 
              </>
              : null }
            {!textArea && !addSkills ?
              <> 
                <label htmlFor={props.name}>{props.text}</label>
                <input name={props.name}/> 
              </>
            : null}
            {addSkills ? 
              <button className={props.name}>Add Related Job Skill</button> 
              : null}
        </>
    )
}