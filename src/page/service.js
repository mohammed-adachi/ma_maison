import React, { Component } from "react";
import Title from './title';
import {FaArchway,FaCloudSunRain, FaFaucetDrip, FaFingerprint} from "react-icons/fa6";
class Service extends Component{
    state={
        Service:[{
            icon:<FaArchway/>,
            title:"tite1",
            info:"description 1 ajjjkkkkkjds"
        },
    {
        icon:<FaCloudSunRain/>,
        title:"tite1",
        info:"description 1 ajjjkkkkkjds"
    },
 {      icon:<FaFaucetDrip/>,
            title:"tite1",
            info:"description 1 ajjjkkkkkjds" },
      {icon:<FaFingerprint/>,
      title:"tite1",
      info:"description 1 ajjjkkkkkjds"}  
        ]
    }
render(){
    return(
        <section>
        
        <Title title="service" />
        <div className="services-center">
        {this.state.Service.map((item, index) => (
                       <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}

        </div>
        
        </section>
    )
}

}
export default Service;