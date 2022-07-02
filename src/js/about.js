import React from "react";
// import Content from "./content";
// import TextField from "./TextField";

const h3Style={
  textAlign:"center",
  textShadow:"1.25px 1.25px 1.5px gray",
  marginBottom:"1em"
}

function About(props){
  return(
    <>
    <section id="aboutUs" style={{textAlign:"center"}} className="container">

<h3 style={h3Style}>A better life starts with a beautiful smile!</h3>

    <p style={h3Style}>
The dental office offers medical services in a location with a pleasant environment, for solving dental problems.
    </p>

<article>
<div class="about-half">

<p>
General dentistry services are the first reason why patients go to the dental office.
</p>

<p>
General dentistry is important for maintaining the health of a beautiful smile as well as general health.<br></br>
Ignoring dental caries and periodontal disease can lead to local infections and general diseases at a distance with multiple manifestations throughout the body.
</p>

<p>
Patients regardless of social category, go to the dentist in an emergency with pain and dental abscess.
</p>

<p>
This leads to tooth devitalization (nerve removal, endodontic treatment and dental treatment) or tooth extraction.
</p>

<p style={h3Style}>
Tooth loss is not a solution.
</p>

</div>
<div class="about-half">

<p>
The natural smile offers the best business card and healthy teeth guarantee the best efficiency in the chewing process.
</p>

<p>
The general dental services are important for the prevention
 and early detection of oral pathology as well as the detection of general diseases with local manifestations in the oral cavity.
</p>

<p style={h3Style}>
Prevention is cheaper than treatment.
</p>

<p>
We offer general dentistry services for patients of all ages, for all family members. It is recommended that everyone benefit twice a year from consultation, control, hygiene.
</p>

</div>
</article>

<p style={h3Style}>
Address:
</p>

<p style={{marginBottom:"1em"}}>
Bucharest , section 2 , Colentina number. 8 , block 5 , stairs B , apartment 46<br></br>
interphone: 46 C
</p>

<p style={h3Style}>Tel:</p>
<p style={{marginBottom:"1em"}}>+40 723 517 707</p>
<p style={h3Style}>Email:</p>
<p style={{marginBottom:"1em"}}>nicu.moraru55@gmail.com</p>
<p style={h3Style}>Details:</p>

<ul>
<li><a href="https://deltamedical.eu/" target="_blank">https://deltamedical.eu/</a></li>
<li><a href="http://astonclinic.ro/index.html" target="_blank">http://astonclinic.ro/index.html</a></li>
</ul>

    </section>


    </>
  )
}
export default About;

///////////////

    // <div><Content/></div>
    // <TextField/>



///
