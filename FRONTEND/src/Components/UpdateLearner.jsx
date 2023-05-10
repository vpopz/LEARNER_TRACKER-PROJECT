import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import HeaderTrainer from './HeaderTrainer';

const UpdateLearner = () => {

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [learnerId,setLearnerId] = useState('')
    const [course,setCourse] = useState('')
    const [project,setProject] = useState('')
    const [batch,setBatch] = useState('')
    const [courseStatus,setCourseStatus] = useState('')
    const [_id,setId] = useState(null)
    console.log("first")
    console.log(_id)

    // eslint-disable-next-line no-unused-vars
    //const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))


    // const apiUrl=`http://localhost:3001/updateData/${_id}`

    useEffect(() =>{
        setLearnerId(localStorage.getItem("learner_id"))
        setName(localStorage.getItem("name"))
        setCourse(localStorage.getItem("course"))
        setProject(localStorage.getItem("project"))
        setBatch(localStorage.getItem("batch"))
        setCourseStatus(localStorage.getItem("course_status"))
        setId(localStorage.getItem("_id"))
        console.log("inside useEffect")        
    },[])
//onClick function
    const setDataToApi = ()=>{
        if (!_id || !name || !learnerId || !course || !project || !batch || !courseStatus) {
            alert("Please fill in all fields.");
            return;
          }
        const studentData = {
            "_id": _id,
            "name" : name,
            "learner_id" : learnerId,
            "course": course,
            "project" : project,
            "batch" : batch,
            "course_status" : courseStatus,
            "token": sessionStorage.getItem("userToken")
        }
        
        axios.post(`/api/updateData/${_id}`,studentData)
        .then(response =>{
            if(response.data.status === 'Data Saved'){
                console.log("inside axios")
                navigate('/learnerDashboard')
            }
            else{
                alert("Update Failed")
            }
        })
    }
  return (
    <div>
        <div><HeaderTrainer/></div>
        <div className="container-fluid" style={{maxWidth:"700px", marginTop:"60px"}}>
            <div className="row g-3" >
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 " >
                    <h3 style={{display:'flex', justifyContent:'center'}}>UPDATE FORM</h3><br/>
                    <div className="row g-3   body" style={{ padding:"20px", borderRadius:"10px"}}>
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>NAME</label>
                            <input name='name' type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="" className='form-label'>Learner ID</label>
                            <input name='learner_id' type="text" value={learnerId} className="form-control" onChange={(e)=> setLearnerId(e.target.value)}/>
                        </div>
                        <div className="col-md-4" style={{marginTop:"20px"}}>
                            <label htmlFor="" className='form-label'><i>Course</i></label>
                            <select name='course' type="text" value={course} className="form-control" onChange={(e)=> setCourse(e.target.value)} > 
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
                            <select name='project' type="text" value={project} className="form-control" onChange={(e)=> setProject(e.target.value)} >
                            <option value="">-- Change Project --</option>
                            <option value="ICTAK">ICTAK</option>
                            <option value="KKEM">KKEM</option>
                            <option value="NORKA">NORKA</option>
                            <option value="ABCD">ABCD</option>
                            <option value="KDISC">KDISC</option>
                            </select>
                        </div>
                        <div className="col-md-4"style={{marginTop:"20px"}}>
                            <label htmlFor="" className='form-label'><i>Batch</i></label>
                            <select name='batch' type="text" value={batch} className="form-control" onChange={(e)=> setBatch(e.target.value)} >
                            <option value="">-- Update Batch --</option>
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
                            <select name='course_status' type="text" className="form-control" value={courseStatus} onChange={(e)=> setCourseStatus(e.target.value)}> 
                            <option value="">-- Update Status --</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Incompetent">Incompetent</option>
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

export default UpdateLearner