import React, {useState , useEffect} from "react";
import Sources from "./sources";



function Footer(){

  const [showLinks , setShowLinks]=useState(false);

  const showSources=(event) =>{
    setShowLinks(!showLinks);
  }

  return(
    <section id="footer">

    <div id="icons">
            <div class="footerIcons"><a href="https://facebook.com/" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
              </a></div>
            <div class="footerIcons"><a href="https://instagram.com/" target="_blank">
                <ion-icon name="logo-instagram"></ion-icon>
              </a></div>
            <div class="footerIcons"><a href="https://twitter.com/" target="_blank">
                <ion-icon name="logo-twitter"></ion-icon>
              </a></div>
          </div>

    {showLinks && <Sources/>}
                <button  onClick={(event) =>showSources(event)}>{showLinks ? "Hide Sources" : "Show Sources"}</button>

    </section>
  )
}
export default Footer;


///{showLinks && <Sources/>}
            // <button  onClick={(event) => {
            //          setShowLinks(!showLinks);
            //                     }}>{showLinks ? "Hide Sources" : "Show Sources"}</button>
