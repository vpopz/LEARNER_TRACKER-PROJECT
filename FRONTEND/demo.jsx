const [file, setFile] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handlefileremove = () => {
    setFile(null)
  }

  const handleSubmit = () => {
    if (!file) {
      return;
    }

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        axios.post('http://localhost:3001/postCsv', { data: results.data })
          .then(response => {
            navigate('/learnerDashboard')
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  }
app.post('/postCsv', async (req, res) => {
    const learners = req.body.data;

    learnerModel.create(learners)
    .then(() => {
      res.send({status: "Data Saved"});
    })
    .catch((err) => {
      res.status(500).send(`Error importing data: ${err}`);
    });
})