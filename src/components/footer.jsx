import React, { Component } from 'react';
import "../App.css";



class Footer extends Component {
   
    render() { 
        return ( 

            

 
<nav className="footer"  style={{position:"relative" , left:"0px", bottom:"0px"}}>
        <div style={{textAlign:"left" , display:"flex" }}>
        <span className="badge badge-danger badge-sm disabled" style={{ alignSelf:"left" , marginTop:"17px", height:"20px", marginLeft:"10px"}}>13 users online</span>
        { <p style={{marginLeft:"31rem" ,justifyContent:"center",color:"#9d9d9d", fontSize:"small", marginTop:"13px"}}> Version-2020 developed by
         <p style={{color:"rgb(216, 107, 107)"}}>&copy; ALL RIGHTS RESERVED</p></p> }
         
         <p style={{marginLeft:"20rem", marginTop:"5px"}}><i class="fa fa-facebook" aria-hidden="true" style={{ padding:"20px"}}></i> 
         <i class="fa fa-instagram" aria-hidden="true" style={{ padding:"20px"}}></i>
         <i class="fa fa-twitter" aria-hidden="true" style={{ padding:"20px"}}></i>
         <i class="fa fa-pinterest-p" aria-hidden="true" style={{ padding:"20px"}}></i></p>
        </div>
        
    </nav> );
    }
}
 
export default Footer;
 