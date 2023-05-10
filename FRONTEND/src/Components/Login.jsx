import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import HeaderLogin from './HeaderLogin'



const Login = () => {
    const [input,setInput] = useState({})

    const navigate = useNavigate()

    // const apiUrl ="http://localhost:3001/login"

    const changeData = (event) =>{

        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }

    const clickLogin = () =>{
        axios.post('/api/login',input)
        .then(response =>{
            console.log(response)
            if(response.data.status === "Login Successful"){
                const token = response.data.token
                console.log(response.data.data)
                const userId = response.data.data._id
                console.log(userId)
                let role = response.data.data.role

                console.log(role)

                sessionStorage.setItem("userToken",token)
                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("role",role)

                if (role === "admin") {
                    navigate("/adminDashboard")
                  }
                  else if(role === "trainerHead"){
                    navigate("/learnerDashboard")
                  }
                  else if(role === "placementOfficer"){
                    navigate("/placementDashboard")    
            }
            else{
                console.log("invalid")
                alert("Invalid Credentials")
            }
        
        }
    else{alert("invalid")}})}
  return (
    
    <div >
        <HeaderLogin/>
       <div className="container-fluid"style={{backgroundColor:"#ffe26a", maxWidth:"600px", marginTop:"100px", padding:"20px", borderRadius:"10px"}}>
        <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>LOGIN</h1>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input name='email' type="email" className="form-control" onChange={changeData}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input name='password' type="password" className="form-control" onChange={changeData}/>
            </div><br/>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={clickLogin} className="btn btn-primary btn-hover">Login</button>
            </div>
            </div>
    </div>
    </div>
    
  )

}

export default Login