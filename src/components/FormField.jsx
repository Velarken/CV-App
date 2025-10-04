export default function FormField({type,name,text}) {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} />
        </>
    )
}