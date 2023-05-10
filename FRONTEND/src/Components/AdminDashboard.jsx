import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin';
import { Link } from 'react-router-dom';
import './Dashboard.css'


const AdminDashboard = () => {
  // const apiUrl="http://localhost:3001/showUser";
    // const apiUrld="http://localhost:3001/deleteUser";

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
          setVisible(false)
        }
        else{
            setVisible(true)
        }
        axios.post('/api/showUser',{"token": userToken}).then(
            (response) =>{
                setData(response.data)
            }
        )
    },[userToken]
    )
    const deleteData= (event)=>{
        const element = {
            "_id" : event.target.value,
            "email": event.target.value,
            "token": userToken
        }
        console.log(element)
         axios.post('/api/deleteUser',element)
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
              <h5 className="card-title mb-3">{user.email}</h5>
              <h6 className="card-subtitle mt-2 mb-2  ">Password: {user.password}</h6>
              <h6 className="card-subtitle mt-2 mb-2  ">Role : {user.role}</h6>
              {visible &&
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {/* TO Update */}
                  <Link className="btn btn-warning me-md-2" to={'/updateInstructor'} onClick={() => setUser(user._id,user.learner_id, user.name, user.course, user.project, user.batch, user.course_status, user.placement_status)}>Edit</Link>

                  {/* TO Delete */}
                  <button className="btn-delete" value={user.email} onClick={deleteData}>Delete</button>
            </div>
              }
            </div>
          </div>
        )
      }
 
  return (
    <div className = "body">
        <div><HeaderAdmin/></div>
        <div className="container ins py-4 mt-3">
          <div className = "instructor_insights"style={{display:'flex', justifyContent: 'center'}}><h1>INSTRUCTOR INSIGHTS</h1></div><br/>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((user) => <div className="col" key={user._id}><LearnerCard user={user} /></div>)}
        </div>
      </div>
        
    </div>
    
  );
};

export default AdminDashboard