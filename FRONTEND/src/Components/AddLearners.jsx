import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderTrainer from './HeaderTrainer';

const AddLearners = () => {
    const [input,setInput] = useState({})
    const navigate=useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))

// const apiUrl = "http://localhost:3001/postData";

const changeMyData = (event) => {
    setInput({
        ...input,[event.target.name]:event.target.value,
        "token" : userToken
    })
}

const buttonClickData=()=>{
    const requiredFields = ['name', 'learner_id', 'course', 'project', 'batch', 'course_status', 'placement_status'];
    const hasEmptyFields = requiredFields.some(field => !input[field]);
    if (hasEmptyFields) {
        alert('Please fill in all required fields');
        return;
    }
    axios.post('/api/postData', input).then(res=>{
        console.log(res);
        alert(res.data.status)
        navigate('/learnerDashboard')   
    })
    
}
  return (
    <div>
    <div><HeaderTrainer/></div><br/>
    <div className="container body" style={{maxWidth:"700px", padding:"20px", borderRadius:"10px"}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"style={{marginTop:"10px"}} >
                <div className="row g-3 "style={{marginTop:"10px"}}>
                <div className="container  " style={{width:"370px"}}><h2 style={{textAlign: "center", margin: "10px 0 10px 0" }}>ADD LEARNER</h2></div>
                    <div className="col-12 " style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label' ><i>NAME</i></label>
                        <input name='name' type="text" className="form-control" onChange={changeMyData} />
                    </div>
                    <div className="col-12" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label' ><i>Learner ID</i></label>
                        <input name='learner_id' type="text" className="form-control" onChange={changeMyData} />
                    </div>
                    <div className="col-md-4" style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Course</i></label>
                        <select name='course' type="text" className="form-control" onChange={changeMyData} > 
                        <option value="">Select a course</option>
                        <option value="FSD">FSD</option>
                        <option value="DSA">DSA</option>
                        <option value="ML-AI">ML-AI</option>
                        <option value="RPA">RPA</option>
                        <option value="ST">ST</option>
                        <option value="CSA">CSA</option>
                        </select>
                    </div>
                    <div className="col-md-4"style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Project</i></label>
                        <select name='project' type="text" className="form-control" onChange={changeMyData} >
                        <option value="">-- Select Project --</option>
                        <option value="ICTAK">ICTAK</option>
                        <option value="KKEM">KKEM</option>
                        <option value="NORKA">NORKA</option>
                        <option value="ABCD">ABCD</option>
                        <option value="KDISC">KDISC</option>
                        </select>
                    </div>
                    <div className="col-md-4"style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Batch</i></label>
                        <select name='batch' type="text" className="form-control" onChange={changeMyData} >
                        <option value="">-- Select Batch --</option>
                        <option value="MAY_22">MAY 22</option>
                        <option value="JUN_22">JUNE 22</option>
                        <option value="JUL_22">JULY 22</option>
                        <option value="AUG_22">AUGUST 22</option>
                        <option value="DEC_22">DECEMBER 22</option>
                        <option value="MAR_23">MARCH 23</option>
                        </select>
                    </div>
                    
                    <div className="col-md-6"style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Course Status</i></label>
                        <select name='course_status' type="text" className="form-control" onChange={changeMyData}> 
                        <option value="">-- Status option --</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Incompetent">Incompetent</option>
                        </select>
                    </div>
                    <div className="col-md-6"style={{marginTop:"20px"}}>
                        <label htmlFor="" className='form-label'><i>Placement Status</i></label>
                        <select name='placement_status' type="text" className="form-control" onChange={changeMyData}> 
                        <option value="">-- Status option --</option>
                        <option value="Placed">Placed</option>
                        <option value="Job Seeking">Job Seeking</option>
                        <option value="Not Interested">Not Interested</option>
                        </select>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={buttonClickData} className="btn btn-success mt-2"> SAVE </button>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default AddLearners