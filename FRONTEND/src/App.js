// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import LearnerDashboard from './Components/LearnerDashboard';
import AddLearners from './Components/AddLearners';
import UpdateLearner from './Components/UpdateLearner';
import AddInstructor from './Components/AddInstructor';
import PlacementDashboard from './Components/PlacementDashboard';
import UpdatePlacement from './Components/UpdatePlacement';
import UpdateInstructor from './Components/UpdateInstructor';
import BatchEnroll from './Components/BatchEnroll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      <Route path="/learnerDashboard" element={<LearnerDashboard/>}/>
      <Route path="/updateLearner" element={<UpdateLearner/>}/>
      <Route path="/addLearner" element={<AddLearners/>}/>
      <Route path="/addinstructor" element={<AddInstructor/>}/>
      <Route path="/placementDashboard" element={<PlacementDashboard/>}/>
      <Route path="/updatePlacement" element={<UpdatePlacement/>}/>
      <Route path="/updateInstructor" element={<UpdateInstructor/>}/>
      <Route path="/addBatch" element={<BatchEnroll/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;

