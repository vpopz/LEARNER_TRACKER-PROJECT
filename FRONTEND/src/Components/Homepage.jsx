import React from 'react'
import Header from './Header'
import carousel1 from "../images/carousel 1.png"
import carousel2 from "../images/carousel 2.jpg"
import carousel3 from "../images/carousal 3.jpg"
import cardfsd from "../images/card-fsd.png"
import carddsa from "../images/card-dsa.png"
import cardmlai from "../images/card-mlai.png"
import cardrpa from "../images/card-rpa.png"
import cardcsa from "../images/card-csa.png"
import cardst from "../images/card-st.png"
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <Header/>
{/* carousel */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="carousel 1"/>
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="carousel 2"/>
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="carousal 3"/>
    </div>

  </div>
</div>


{/* About */}

<div style={{backgroundColor:"#16123f"}}>
  <br/>
<div className="container main">
  
    <h3 style={{padding:"8px 0px 4px 0px"}}>ICTAK</h3>
    <p>
    ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model
     for imparting ICT skills to the youths of Kerala and improving their employability 
     opportunities in the Industry. The Company is supported by Govt.
     of India, partnered by Govt. of Kerala and the IT industry.
    </p>
    <h4><i>Learner Tracker</i></h4>
    <p style={{padding:"4px 0px 8px 0px"}}>
    The ICTAK Learner Tracker” for managing learner training and placement activities.
     This platform will track their progress, while also giving faculties a tool for managing learner performance. 
    </p>
</div><br/>

{/* cards */}
<div className="container main" style={{paddingBottom:"10px"}}>
    <div><h3 style={{padding:"8px 0px 4px 0px"}}>Courses</h3></div>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src={cardfsd} className="card-img-top" alt="FSD"/>
      <div className="card-body">
        <h5 className="card-title">FSD</h5>
        <p className="card-text">This course on FSD using MERN Stack is designed to provide you the Web Application Development fundamentals. In this course, you will learn the front-end development technologies - HTML, CSS, JavaScript, React server-side technologies - Node JS & ExpressJS and MongoDB database. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={carddsa} className="card-img-top" alt="DSA"/>
      <div className="card-body">
        <h5 className="card-title">DSA</h5>
        <p className="card-text">Data science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={cardmlai} className="card-img-top" alt="ML-AI"/>
      <div className="card-body">
        <h5 className="card-title">ML-AI</h5>
        <p className="card-text">Machine learning is a branch of artificial intelligence and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Machine learning and the technology around it are developing rapidly.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={cardrpa} className="card-img-top" alt="RPA"/>
      <div className="card-body">
        <h5 className="card-title">RPA</h5>
        <p className="card-text">RPA, aka software robots, is a form of business automation tool which handles repetitive and manual tasks. It is designed to automate manual work such as copy-pasting so that people can focus their time and energy on high-value tasks. The end goal is to automate business processes.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={cardcsa} className="card-img-top" alt="CSA"/>
      <div className="card-body">
        <h5 className="card-title">CSA</h5>
        <p className="card-text">Cyber security refers to all aspect of protecting an organization and its employees against cyber threats. As cyberattacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={cardst} className="card-img-top" alt="ST"/>
      <div className="card-body">
        <h5 className="card-title">ST</h5>
        <p className="card-text">Software testing is simply testing the product. The process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing or handling bugs, reducing development costs and improving performance.</p>
      </div>
    </div>
  </div>
</div>
</div>

{/* contact_us */}
<br/><br/>
<div className="container main" style={{paddingBottom:"1px"}}>
    <div style={{padding:"8px 0px 4px 0px "}}><h5 >Contact US</h5></div>
    <div><p> GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581<br/>

ICT Academy of Kerala is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p></div>
</div><br/>

{/* footer */}

<Footer/>



    </div>
    </div>
  )
}

export default Homepage