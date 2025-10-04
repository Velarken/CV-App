import '../styles/Form.css'
import FormField from './FormField'

export default function Form(props) {
  const listItems = props.fields.map(field =>
    <FormField
      key={field.name}
      type={field.type}
      name={field.name}
      text={field.label}
    />
  )
    return (
        <>
          <div className="sectionHead">
            <h3 className='title'>{props.name}</h3>
            {props.addButton ? <button className='addSection' id={props.id + 'Button'} >Add Section</button> : null}
          </div>
          <div className="sectionContent">{listItems}</div>
        </>
    )
}