import React, { Component } from "react";

export class teamprofile extends Component{
    constructor(){
    super()
    }

    render(){
          return(
<div className="clearfix">
 <div className="row">
   {this.state.data.map(data => (
     <div className="col-md-4 animated fadeIn" key={data.id.value}>
       <div className="card">
         <div className="card-body">
           <div className="avatar">
             <img
               src={data.picture.large}
               className="card-img-top"
               alt=""
             />
           </div>
           <h5 className="card-title">
             {this.uppercase(data.name.first) +
               " " +
               this.uppercase(data.name.last)}
           </h5>
           <p className="card-text">
             {data.location.city +
               ", " +
               this.uppercase(data.location.state)}
             <br />
             <span className="phone">{data.phone}</span>
           </p>
         </div>
       </div>
     </div>
   ))}
 </div>
</div>
            )}
        }
