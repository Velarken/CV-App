import { useState } from 'react'

export function BasicInfoInput() {
    const [nameInfo,setNameInfo] = useState({
        firstName:'Crowerson',
        middleInitial:'C',
        lastName:'Crowenstien'
    })
    const [addressInfo,setAddressInfo] = useState({
        city:'CrowTown',
        state:'CrowState'
    })
    const [contactInfo,setContactInfo] = useState({
        remoteWork:true,
        areaCode:'999',
        fullNumber:'9999999',
        emailAddress:'XX6crow9XX@crowmail.com'
    })

    function handleFirstName(e) {
        setNameInfo({
            ...nameInfo,
            firstName:e.target.value
        })
    }
    function handleMiddleInitial(e) {
        setNameInfo({
            ...nameInfo,
            middleInitial:e.target.value
        })
    }
    function handleLastName(e) {
        setNameInfo({
            ...nameInfo,
            lastName:e.target.value
        })
    }
    function handleCityName(cityName) {
        setAddressInfo({
            ...addressInfo,
            city:cityName
        })
    }
    function handleStateName(state) {
        setAddressInfo({
            ...addressInfo,
            state:state
        })
    }
    function handleRemoteWork(e) {
        setContactInfo({
            ...contactInfo,
            remoteWork:e.target.checked
        })
    }
    function handleAreaCode(e) {
        setContactInfo({
            ...contactInfo,
            areaCode:e.target.value
        })
    }
    function handleFullNumber(e) {
        setContactInfo({
            ...contactInfo,
            fullNumber:e.target.value
        })
    }
    function handleEmailAddress(e) {
        setContactInfo({
            ...contactInfo,
            emailAddress:e.target.value
        })
    }

    return (
        <>
            <div className="fullName">
                <h3>Name</h3>
                <label htmlFor="firstName">First Name:  </label>
                <input type="text" name="firstName" onChange={(e) => handleFirstName(e)}/>
                <label htmlFor="middleInitial">Middle Initial:  </label>
                <input type="text" name="middleInitial" onChange={(e) => handleMiddleInitial(e)}/>
                <label htmlFor="lastName">Last Name:  </label>
                <input type="text" name="lastName"onChange={(e) => handleLastName(e)}/>
            </div>
            <div className="address">
                <h3>Address</h3>
                <label htmlFor="remoteWork">Remote Friendly?  </label>
                <input type="checkbox" name="remoteWork" onChange={(e) => handleRemoteWork(e)}/>
                <label htmlFor="townName">City / Town Name:  </label>
                <input type="text" name="townName" onChange={(event) => handleCityName(event.target.value)}/>
                <label htmlFor="state">State</label>
                <input type="text" name="state" onChange={(event) => handleStateName(event.target.value)}/>
            </div>
            <div className="contactInfo">
                <h3>Contact Info</h3>
                <label htmlFor="areaCode">Area Code</label>
                <input type="number" name="areaCode" onChange={(e) => handleAreaCode(e)}/>
                <label htmlFor="fullNumber">Phone Number</label>
                <input type="number" name="fullNumber" onChange={(e) => handleFullNumber(e)} />
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" name="emailAddress" onChange={(e) => handleEmailAddress(e)}/>
            </div>

            <div className="displaynameInfo">
                <div>{nameInfo.firstName + ' ' + nameInfo.middleInitial + '. ' + nameInfo.lastName}</div>
                <div>{addressInfo.city + ', ' + addressInfo.state}</div>
            </div>
            <div>{contactInfo.remoteWork ? <div>Remote Friendly!</div> : null}</div>
            <div className="displayContactInfo">
                <div>{contactInfo.areaCode + '-' + contactInfo.fullNumber.slice(0,3) + '-' + contactInfo.fullNumber.slice(3,7)}</div>
                <div>{contactInfo.emailAddress}</div>
            </div>
        </>
    )
}
export default BasicInfoInput