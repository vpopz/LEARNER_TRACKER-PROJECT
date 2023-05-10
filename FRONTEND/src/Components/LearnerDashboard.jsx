import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import HeaderTrainer from './HeaderTrainer';
import './Dashboard.css'

const LearnerDashboard = () => {

    // const apiUrl="http://localhost:3001/viewdata";
    // const apiUrld="http://localhost:3001/deleteData";

    const [visible, setVisible]=useState(true);


    const [data, setData]=useState([])
    // eslint-disable-next-line no-unused-vars
    const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))
    useEffect(()=>{

        let role = sessionStorage.getItem("role")
        if (role === 'placementOfficer')
        {
            setVisible(false)
        }else if (role==='trainerHead'){
          setVisible(true)
        }
        else{
            setVisible(false)
        }
        axios.post('/api/viewdata',{"token": userToken}).then(
            (response) =>{
                setData(response.data)
            }
        )
    },[userToken]
    )
    const deleteData= (event)=>{
        const element = {
            "_id" : event.target.value,
            "learner_id":event.target.value,
            "token": userToken
        }
        console.log(element)
         axios.post('/api/deleteData',element)
         .then(response=>{
                console.log(response)
                if(response.data.status=== 'Data Deleted'){
                    window.location.reload(true)
                }
            }
        )      
    }

    const setUser=(id,learner_id, name,course,project,batch,course_status, placement_status)=>{
        localStorage.setItem("_id",id);
        localStorage.setItem("learner ID",learner_id);
        localStorage.setItem("name",name);
        localStorage.setItem("course",course);
        localStorage.setItem("project",project);
        localStorage.setItem("batch",batch);
        localStorage.setItem("course_status",course_status);
        localStorage.setItem("placement_status",placement_status);
            
      }

      const LearnerCard = ({ user }) => {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title mb-3">{user.name}</h5>
              <h6 className="card-subtitle mt-2 mb-2 ">Learner ID : {user.learner_id}</h6>
              <h6 className="card-subtitle mt-2 mb-2  ">Course : {user.course}</h6>
              <p className="card-text mb-1">Project : {user.project}</p>
              <p className="card-text mb-1">Batch : {user.batch}</p>
              <p className="card-text mb-1">Course Status : {user.course_status}</p>
              <p className="card-text ">Placement Status : {user.placement_status}</p>
              {visible &&
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link className="btn btn-warning me-md-2" to={'/updateLearner'} onClick={() => setUser(user._id,user.learner_id, user.name, user.course, user.project, user.batch, user.course_status, user.placement_status)}>Edit</Link>
                  <button className="btn-delete" value={user.learner_id} onClick={deleteData}>Delete</button>
                </div>
              }
            </div>
          </div>
        )
      }


  return (
    <div className ="body">
        <div><HeaderTrainer/></div>
        <div style={{display:'flex', justifyContent:'center'}}><h1>LEARNER INSIGHTS</h1></div>
        <div className="container ins py-4 mt-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((user) => <div className="col" key={user._id}><LearnerCard user={user} /></div>)}
        </div>
      </div>
        
    </div>
  )
}

export default LearnerDashboard