import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderAdmin from './HeaderAdmin';


const AddInstructor = () => {

  const [input,setInput] = useState({})
    const navigate=useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))

// const apiUrl = "http://localhost:3001/enterUser";



const changeMyData = (event) => {
    setInput({
        ...input,[event.target.name]:event.target.value,
        "token" : userToken
    })
}

const buttonClickData=()=>{
    if (!input.email || !input.password || !input.role) {
        alert("Please fill out all fields");
        return;
    }
    axios.post('/api/enterUser', input).then(res=>{
        console.log(res);
        alert(res.data.status)
        navigate('/adminDashboard')   
    })
    
}
  return (
    <div>
        <div><HeaderAdmin/></div>
        <div>
    <div className="container-fluid" style={{maxWidth:"600px", backgroundColor:"#ffe26a", marginTop:"100px", padding:"20px"}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"style={{marginTop:"20px"}} >
                <div style={{marginTop:"20px"}}>
                <div className="container mt-4 "><h2 style={{textAlign: "center"}}>Add Instructor</h2></div>
                    <div className="col-12" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label' ><i>Email</i></label>
                        <input name='email' type="email" className="form-control" onChange={changeMyData} />
                    </div>
                    <div className="col-12" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label' ><i>Password</i></label>
                        <input name='password' type="text" className="form-control" onChange={changeMyData} />
                    </div>
                    <div className="col-md-4" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Role</i></label>
                        <select name='role' type="text" className="form-control" onChange={changeMyData} > 
                        <option value="">Select a role</option>
                        <option value="trainerHead">Trainer Head</option>
                        <option value="placementOfficer">Placement Officer</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={buttonClickData} className="btn btn-success mt-2"> SAVE </button>
                    </div>
                </div>
            </div>
        </div>
</div>
        
    </div>
  )
}

export default AddInstructor