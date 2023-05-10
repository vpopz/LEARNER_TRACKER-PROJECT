import { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import HeaderTrainer from './HeaderTrainer';
import { useNavigate } from 'react-router-dom';

const allowedExtensions = ['csv'];

const BatchEnroll = () => {
  // const apiUrl = 'http://localhost:3001/postCsv';
  const navigate = useNavigate();
  const userToken = sessionStorage.getItem('userToken');
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setError('');
  
    const inputFile = e.target.files[0];
    if (!inputFile) {
      return;
    }
  
    const fileExtension = inputFile.type.split('/')[1];
    if (!allowedExtensions.includes(fileExtension)) {
      setError('Please input a CSV file');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      console.log(target.result)
      const csv = await Papa.parse(target.result, { header: true });
      setData(csv.data);
      console.log(csv.data)
    };
  console.log(inputFile)
    reader.readAsText(inputFile);
  };
  

  const handleParse = () => {
    if (!data.length) {
      setError('No data to parse');
      return;
    }

    axios
      .post('/api/postCsv', { data, token: userToken })
      .then((res) => {
        console.log(res);
        if (res.data.status === 'Data Saved') {
          console.log(data);

        navigate('/learnerDashboard');
        } else {
          console.log(res.data.status);
        }
      })
      .catch((error) => {
        console.log('Error occurred: ', error);
      });
  };

  return (
    <div>
      <HeaderTrainer />
      <div className="container-fluid body" style={{maxWidth:"350px", marginTop:"150px", padding:"15px 15px 5px 15px", borderRadius:"10px"}}>
        <form>
          <div className="mb-3">
          <div style={{display:"flex", justifyContent:"center"}}>
              <h3>BATCH ENROLL</h3>
            </div><br/>
            <div className="mb-3">
              <label htmlFor="formFileSm" className="form-label">ADD .CSV FILE{' '}</label>
              <input name="file"className="form-control form-control-sm"id="formFileSm" type="file"onChange={handleFileChange}/>
            </div>
            <button type="button" onClick={handleParse} className="btn btn-primary">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BatchEnroll;