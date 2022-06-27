import React, {useState} from 'react';
// import BoxImage from "./BoxImage";
// import BeforeAndAfter from "./before-after";
// import InfoVegetables from "./vegetables-function";


const h3Style={
  textAlign:"center",
  textShadow:"1.25px 1.25px 1.5px gray",
  marginBottom:"1em"
}

const divStyle={
               display:"flex",
               alignItems:"center",
               justifyContent:"center",
               flexDirection:"column",
               // border:"3px solid yellowgreen",
               margin:"0 1.5em",
               padding:"0 1.5em"
};
//////////////////////////////////////////
const newText=
`
Who is the only health care provider you see more than anyone else?
For many people, the answer is simple: the dentist.
`

const newTextSecond=
`
There is a good reason for this - it is that general dentistry is uniquely focused on disease prevention.
In fact, it is estimated that over 50% of all dental procedures are either diagnostic or preventive.
`

///////////////////////////////////////////
function Info(props){

const [moreInfo , setMoreInfo]=useState("");

const [moreInfoSecond , setMoreInfoSecond]=useState("");

console.log("rendering from info.js");

const addInfo = (event) =>{
    setMoreInfo(newText);
    setMoreInfoSecond(newTextSecond);
  }

  return(
<>
    <section id="info" style={divStyle} className="container">

    <h3 style={h3Style}>A positive experience</h3>

    <p style={{textAlign:"center"}}>
Dentistry is the evaluation, diagnosis, prevention and treatment of diseases related to the oral cavity and the maxillofacial region.
    </p>

    <p style={{textAlign:"center"}}>
    The dental office offers everything from routine consultation and control to complex restorative prosthetic treatments.
    </p>

        <p style={{textAlign:"center"}}>
With a strong focus on oral health and hygiene, general dentistry helps people avoid the progression of oral diseases.
        </p>

        <p style={{textAlign:"center"}}>
If left untreated, they result in pain, lost time at work or school, and a high cost each year.
        </p>

    <button onClick={addInfo}>Find out more</button>

    <p style={h3Style}>{moreInfo}</p>

      <p style={{textAlign:"center" , marginBottom:"1em"}}>{moreInfoSecond}</p>

    </section>
</>
  )
}

export default Info;

//  <h3 style={{marginBottom:"1.5em" , marginTop:"-0.6em"}}>Intresting information</h3>

//35   // <BoxImage/>


// <BeforeAndAfter/>
// <InfoVegetables/>













//
