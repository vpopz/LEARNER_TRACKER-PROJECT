import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import HeaderPlacement from './HeaderPlacement';

const UpdatePlacement = () => {
    const navigate = useNavigate()
    const [placementStatus,setPlacementStatus] = useState('')
    const [_id,setId] = useState(null)
    console.log("first")
    console.log(_id)

    // eslint-disable-next-line no-unused-vars


    // const apiUrl=`http://localhost:3001/updateData/${_id}`

    useEffect(() =>{
        setPlacementStatus(localStorage.getItem("placement_status"))
        setId(localStorage.getItem("_id"))
        console.log("inside useEffect")        
    },[])
//onClick function
    const setDataToApi = ()=>{
        const studentData = {
            "_id": _id,
            "placement_status" : placementStatus,
            "token": sessionStorage.getItem("userToken")
        }
        
        axios.post(`/api/updateData/${_id}`,studentData)
        .then(response =>{
            if(response.data.status === 'Data Saved'){
                console.log("inside axios")
                navigate('/placementDashboard')
            }
            else{
                alert("Update Failed")
            }
        })
    }
  return (
    <div>
        <div><HeaderPlacement/></div><br/>
        <div className="container-fluid body"style={{maxWidth:'450px', padding:"20px", marginTop:"80px", borderRadius:"10px"}}>
            <div className="row g-3" style={{margin: "20px 10px 0 10px"}}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " >
                    <h3 style={{display:'flex', justifyContent:'center'}}>UPDATE PLACEMENT STATUS</h3><br/>
                    <div className="row g-3 ">
                        
                        <div className="col-md-12" style={{marginTop:"20px"}}>
                            <label htmlFor="" className='form-label'><i>Placement Status</i></label>
                            <select name='placement_status' type="text"  className="form-control" onChange={(e)=> setPlacementStatus(e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="Placed">Placed</option>
                            <option value="Job Seeking">Job Seeking</option>
                            <option value="Not Interested">Not Interested</option>
                            </select>
                        </div>
                        
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={setDataToApi} className="btn btn-warning"> UPDATE </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default UpdatePlacement