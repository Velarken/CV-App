import FormField from './FormField'

export default function Form({name,fields}) {

    return (
        <>
          <h1>Hello World.</h1>
          <h1>{name}</h1>
          {fields.map((field) => {
            <FormField 
              type={field[0]}
              name={field[1]}
              text={field[2]}
            />
          })}
       
        </>
    )
}