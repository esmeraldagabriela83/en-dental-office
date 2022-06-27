import React, {Component,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {Form , UsersData} from './Form';
import InfoQuestions from "./infoQuestions";
import Footer from "./Footer";
import MenuNav from "./MenuNav";
import Info from "./info";
import Logo from "./logo";
import About from "./about";
// import persons from "../../data/db";

const h3Style={
  textAlign:"center",
  textShadow:"1.25px 1.25px 1.5px gray",
  marginBottom:"1em"
}

function App(){
  return(
    <>
    <div id="upperPart">
    <nav className="container">
    <Logo/>
    <MenuNav/>
    </nav>
    <div className="text">General <br></br>Dental Care</div>

    </div>

    <div className="container" style={{marginTop:"-2em"}}>
  <a href="#questions">
  <ion-icon name="arrow-down" id="ionArrow"></ion-icon>
  </a>
  </div>

    <section id="content">

    <div className="renovation">
    <p style={{margin:"1.5em", fontWeight:"bold"}}>
    During this period the office is under renovation, we will return with details.
    </p>
    </div>

    <div className="container" style={{marginTop:"1.5em" , marginBottom:"1.5em"}}>
<a href="gdpr.html" id="gdpr-home">GDPR</a>
    </div>

<div className="container">

    <Info/>

    <About/>
    </div>

    <div className="container">
<h3 style={h3Style}>Dental procedures</h3>
    <ul id="dentalProcedures">

<li><a href="./procedures/detartraj.html">Dental scaling and brushing</a></li>
<li><a href="./procedures/odontologie.html">Dental filling</a></li>
<li><a href="./procedures/endodontie.html">Endodontic treatment</a></li>
<li><a href="./procedures/lucrari-dentare.html">Prosthetic dental works</a></li>
<li><a href="./procedures/extractie-dentara.html">Tooth extraction</a></li>
<li><a href="./procedures/urgente.html">Emergencies</a></li>
    </ul>

  </div>

<div className="container">
  <h3 style={h3Style}>Appointment</h3>
  <Form userid={"users.id"} formTitle={"Complete form"}/>
</div>


  <div className="container" id="questions" style={{padding:"1em"}}>
<h3 style={h3Style}>Patient FAQs</h3>
    <InfoQuestions/>
  </div>

    </section>

    <div className="container">
    <Footer/>
    </div>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));

//32   // <Form userid={"users.id"} formTitle={"Complete form"}/>





















//
