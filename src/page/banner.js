import React from "react";

export default function Banner({enfants,subtitle,title,link}){
return(
   
    <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {enfants}
        {link}
         
        </div>
   
);

}
