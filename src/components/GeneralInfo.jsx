import {useState} from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo() {
    const [firstName,setFirstName] = useState('');
    const [middleInitial,setMiddleInitial] = useState('');
    const [lastName,setLastName] = useState('');
    const [remoteWork,setRemoteWork] = useState(false);
    const [cityName,setCityName] = useState('');
    const [stateName, setStateName] = useState('');
    const [areaCode,setAreaCode] =useState('')
    const [phoneNumber,setPhoneNumber] = useState('');
    const [emailAddress,setEmailAddress] = useState('');
    const [elementVisibility,setElementVisibility] = useState(false);
    
    function handleFirstName(name) {
        setFirstName(name);
    }
    function handleMiddleInitial(initial) {
        setMiddleInitial(initial);
    }
    function handleLastName(name) {
        setLastName(name);
    }
    function handleAreaCode(number) {
        setAreaCode(number)
    }
    function handlePhoneNumber(number) {
        setPhoneNumber(number)
    }
    function handleEmailAddress(email) {
        setEmailAddress(email)
    }
    function handleCityName(city) {
        setCityName(city)
    }
    function handleStateName(state) {
        setStateName(state)
    }
    function handleRemoteWork(checked) {
        setRemoteWork(checked)
    }
    function formatPhoneNumber(areaCode,phoneNumber) {
        let officeCode = parseInt(phoneNumber.slice(0,3));
        let stationCode = parseInt(phoneNumber.slice(3,9));
        return '(' + areaCode + ') - ' + officeCode + ' - ' + stationCode
    }
    function handleEditButton() {
        let form = document.getElementById('editGeneralInfo');
        let display = document.getElementById('showGeneralInfo');
        let saveButton = document.getElementById('generalInfoSaveButton');
        form.classList.toggle('hidden')
        display.classList.toggle('hidden')
        saveButton.classList.toggle('hidden')
    }

    return (
        <>
        { 
          elementVisibility ? (
            <form action="" className="generalInfo" id="editGeneralInfo">
                <div className="fullName">
                    <h3>Name</h3>
                    <label htmlFor="firstName">First Name:  </label>
                    <input type="text" name="firstName" onChange={(event) => handleFirstName(event.target.value)}/>
                    <label htmlFor="middleInitial">Middle Initial:  </label>
                    <input type="text" name="middleInitial" onChange={(event) => handleMiddleInitial(event.target.value)}/>
                    <label htmlFor="lastName">Last Name:  </label>
                    <input type="text" name="lastName"onChange={(event) => handleLastName(event.target.value)}/>
                </div>
                <div className="address">
                    <h3>Address</h3>
                    <label htmlFor="remoteWork">Remote Friendly?  </label>
                    <input type="checkbox" name="remoteWork" onChange={(event) => handleRemoteWork(event.target.value)}/>
                    <label htmlFor="townName">City / Town Name:  </label>
                    <input type="text" name="townName" onChange={(event) => handleCityName(event.target.value)}/>
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" onChange={(event) => handleStateName(event.target.value)}/>
                </div>
                <div className="contactInfo">
                    <h3>Contact Info</h3>
                    <div className="phoneNumber">
                        <label htmlFor="areaCode">Area Code:  </label>
                        <input type="tel" name="areaCode" onChange={(event) => handleAreaCode(event.target.value)}/>
                        <label htmlFor="phoneNumber">Phone Number:  </label>
                        <input type="tel" name="phoneNumber" onChange={(event) => handlePhoneNumber(event.target.value)}/>
                    </div>
                    <label htmlFor="emailAddress">Email:  </label>
                    <input type="email" name="emailAddress" pattern=".+@example\.com" onChange={(event) => handleEmailAddress(event.target.value)}/>
                </div>
            </form>
            ) : null
        }  
            <button 
                style={
                    {
                        display:'flex',
                        width:'90vw',
                        marginTop:'2vh',
                        textAlign:'center'
                    }} 
                title={elementVisibility ? 'Edit Info' : 'Save Info'}
                onClick={() => setElementVisibility(!elementVisibility)} >{elementVisibility ? 'Save Info' : 'Edit Info'}</button>
            <div className="generalDisplayInfo" id="showGeneralInfo">
                <div id="contactInfo">
                    <h1 id="fullName">{firstName + ' ' + middleInitial + '. ' + lastName}</h1>
                    <h3 id="phoneNumber">{formatPhoneNumber(areaCode,phoneNumber)}</h3>
                    <h3 id="emailAddress">{emailAddress}</h3>
                    <h4 id="fullAddress">{remoteWork ? cityName + ', ' + stateName + '  |  Open to working remotely! ' : cityName + ', ' + stateName + '  |  Not open to working remotely.'}</h4>
                </div>
                <div className="addressDisplay">
                    
                </div>
            </div>
        </>
    )
}
export default GeneralInfo