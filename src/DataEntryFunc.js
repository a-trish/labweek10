import React, {useState} from 'react'

export default function DataEntryFunc() {

    const provinces = [
        "Alberta", 
        "British Columbia", 
        "Manitoba",
        "Elijah",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"]

    const [data, setData] = useState({
        email: '', 
        name: '',
        address: '',
        address2: '',
        city: '',
        province:'',
        postalCode: ''
        // showEmail: false, 
        // showName: false,
        // showAddress: false,
        // showAddress2: false,
        // showCity: false,
        // showProvince:false,
        // showPostalCode: false
    })


    const readData = (event) => {
        setData({...data,[event.target.name]: event.target.value})
    }

    const submitData = (event) => {
        event.preventDefault()
        //setData({...data, [event.target.name]: true})
        // setData({...data,showEmail: true})
        // setData({...data,showName: true})
        // setData({...data,showAddress: true})
        // setData({...data,showAddress2: true})
        // setData({...data,showCity: true})
        // setData({...data,showProvince: true})
        // setData({...data,showPostalCode: true})
        console.log(JSON.stringify(data))
    }

    return (
        <>
            <form onSubmit = {submitData}>
                <h1>Data Entry Form</h1>
                <div>
                    <div>
                        <label>Email</label>
                        <input name="email" onChange={readData} placeholder="Enter Email" type="email"/>
                        <label>Name</label>
                        <input name="name" onChange={readData} placeholder="Full Name" type="text"  />
                    </div>

                    <div>
                        <label>Address</label>
                        <input name="address" onChange={readData} type="text" placeholder="1234 Main St" />
                    </div>
                    <div>
                        <label>Address 2</label>
                        <input name="address2" onChange={readData} type="text" placeholder="Apartment, studio, or floor"/>
                    </div>
                </div>

                <div>
                    <div>
                        <label>City</label>
                        <input name="city" onChange={readData} type="text" />

                        <label>Province</label>
                        <select name="province" onChange={readData} type="text">
                            <option>Select Province</option>
                            {
                                provinces.map(v =>{
                                    return(<option key={v}>{v}</option>)
                                })
                            }
                        </select>

                        <label>Postal Code</label>
                        <input name="postalCode" onChange={readData} type="text" />
                    </div>
                </div>
                <input type="checkbox"/> Agree Terms &amp; Condition?
                <input type="submit" value="Submit" id="btn"/>
            </form>

            <table className="output">
                <tr><><td className='op'>Email:</td> {data.email}</></tr>
                <tr><><td className='op'>Full name:</td> {data.name}</></tr>
                <tr><><td className='op'>Address:</td> {data.address}</></tr>
                <tr><><td className='op'>Address 2:</td> {data.address2}</></tr>
                <tr><><td className='op'>City:</td> {data.city}</></tr>
                <tr><><td className='op'>Province:</td> {data.province}</></tr>
                <tr><><td className='op'>Postal code:</td> {data.postalCode}</></tr> 
      </table>
        </>
    )
}

