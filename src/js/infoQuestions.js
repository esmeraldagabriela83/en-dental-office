import React,{useState,useEffect} from 'react';
import questions from "./questions";

////////

const articleStyle={
  cursor:"pointer" ,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  width:"100%"
}

const h3Style={
  textAlign:"center",
  textShadow:"1.25px 1.25px 1.5px gray",
  marginBottom:"1em"
}

//////////

export default function InfoQuestions(props){
  const [xquestions,setQuestions] = useState(questions);
console.log("questions from inside InfoQuestions function component is : " , questions);



  //echivalent componentDidUpdate
  //useEffect(functie, [stateVar]) - array care contine variabilele de state monitorizate
  useEffect(()=>{
    console.log("did update from InfoQuestions function component , file curs36");
  },[xquestions])


  return (
    <>

      <section style={articleStyle}>
    {xquestions.map( (el,index) => {
          return(

            <article  key={index} style={articleStyle}>

      <h3 style={h3Style}>{el.title}</h3>

            <div style={{backgroundImage:el.urlImage,
                         height:"300px",
                         margin:"1em",
                         borderRadius:"0.3em",
                         boxShadow:"1.5px 1.5px 3px gray",
                         backgroundRepeat:"no-repeat",
                         backgroundPosition:"center",
                         backgroundSize:"cover"}} className="questions-image"></div>


            <p style={{textAlign:"center" , margin:"0 1em" , padding:"0 1em"}}>{el.paragraph}</p>

            </article>

          )
        })}
        </section>
     </>
        )

}

console.log("useEfect ex 3 day 2 react curs 36 13 05 2022");

// height: 300px;
//  width: 100%;
//  background-repeat: no-repeat;
//  background-image: url(./images/pexels-photo-847393.jpeg);
//  background-position: center;
//  background-size: cover;
