import React from 'react';

const styleLogo={
  letterSpacing:"0.3em",
  fontWeight:"bold",
  textAlign:"left"
}


function Logo(){
  return(
    <div id="logo">
    <span style={styleLogo}>Dental</span><br></br><p style={{letterSpacing:"0.40em", textAlign:"left"}}>Office</p>
    </div>
  )
}
export default Logo;
