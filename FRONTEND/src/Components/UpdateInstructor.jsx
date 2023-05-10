import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin';

const UpdateInstructor = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')

   // const [placementStatus,setPlacementStatus] = useState('')
    const [_id,setId] = useState(null)
    console.log("first")
    console.log(_id)

    // eslint-disable-next-line no-unused-vars
    // const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))


    // const apiUrl=`http://localhost:3001/updateUser/${_id}`

    useEffect(() =>{
        setEmail(localStorage.getItem("email"))
        setPassword(localStorage.getItem("password"))
        setRole(localStorage.getItem("role"))
        setId(localStorage.getItem("_id"))
        console.log("inside useEffect")        
    },[])
    //onClick function

    const setDataToApi = ()=>{
        if (!email || !password || !role) {
            alert("Please fill in all fields.");
            return;
          }
        
        const userData = {
            "_id": _id,
            "email":email,
            "password":password,
            "role":role,          
            "token": sessionStorage.getItem("userToken")
        }

        axios.post(`/api/updateUser/${_id}`,userData)
        .then(response =>{
            if(response.data.status === 'Data Saved'){
                console.log("inside axios")
                navigate('/adminDashboard')
            }
            else{
                alert("Update Failed")
            }
        })
    }
  return (
    <div>
    <div><HeaderAdmin/></div>
    <div className="container-fluid" >
        <div className="row g-3 " style={{margin: "40px 10px 0 10px"}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "  >
                <h3 style={{display:'flex', justifyContent:'center'}}>UPDATE INSTRUCTOR </h3>
                <div className="row  position-absolute top-50 start-50 translate-middle body" style={{padding:"20px", borderRadius:"10px"}}>
                <div className="col-12">
                            <label htmlFor="" className='form-label'>Email</label>
                            <input name='email' type="email" value={email} className="form-control" onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className='form-label' style={{marginTop:"10px"}}>Password</label>
                            <input name='password' type="text" value={password} className="form-control" onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                            
                    <div className="col-md-12" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Role</i></label>
                        <select name='role' type="text"  className="form-control" onChange={(e)=> setRole(e.target.value)}>

                        <option value="">Select an option</option>
                        <option value="trainerHead">Trainer Head</option>
                        <option value="placementOfficer">placement Officer</option>
                    
                        </select>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br/>
                        <button onClick={setDataToApi} className="btn btn-warning"> UPDATE </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateInstructor