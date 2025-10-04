import Form from "./Form";
import FormField from "./FormField";

export default function App() {
    const CONTACTFIELDS = [
        ['text','firstName','First Name:  '],
        ['text','middleInitial','Middle Initial:  '],
        ['text','lastName','Last Name:  '],
        ['text','emailAddress','Email Address:  '],
        ['tel','phoneNumber','Phone Number:  '],
        ['text','streetAddress','Street Address:  '],
        ['text','city','City / Township:  '],
        ['text','state','State / Province:  '],
        ['number','zipCode','Zip Code:  ']
    ];
    return (
        <>
          <Form title='Contact Info' fields={CONTACTFIELDS} />
        </>
    )
}