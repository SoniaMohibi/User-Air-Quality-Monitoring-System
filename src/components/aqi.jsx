import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  firebaseDB from '../firebase';
import {Button,Card,ListGroup,ListGroupItem} from "react-bootstrap";
import { IndividualParameter } from './individualParameter';
const aqidetails={
  aqi:0,
  aqilevel:'',
  icon:''
}
export const  Aqi=(props)=>{

    var [aqi,setAQIValue] =useState(18)

          useEffect(() => {

          firebaseDB.child('aqi').on('value',snapshot=>{

            if(snapshot.val()!=null){
              setAQIValue(snapshot.val())
            }
            else
            setAQIValue()

            //   if(snapshot.val()>0 && snapshot.val()<150 ){
            //     setAQIValue(
            //       aqi=snapshot.val(),
            //       aqilevel="Good",
            //       icon:
            //     )
            //   }
            //   else if(snapshot.val()>150 && snapshot.val()<300 ){
            //     setAQIValue(
            //       aqi=snapshot.val(),
            //       aqilevel="Moderate",
            //       icon:
            //     )
            // }
            // else if(snapshot.val()>300 && snapshot.val()<500 ){
            //   setAQIValue(
            //     aqi=snapshot.val(),
            //     aqilevel="Hazardous",
            //     icon:
            //   )

           })

          },[])
  return (
    <div>
    <Button className="lastupdate" variant="primary">LAST UPDATE</Button>
  <Card  className='aqicard'>
  <div className='aqiheader' >
  <div className='aqivalue'>
  <Card.Body className='bodyname'>
    <Card.Title>IBA AQI</Card.Title>
    <Card.Text class="exactAqiValue" >
      {aqi}
    </Card.Text>
     <Link to="/parameters"><Button onClick={IndividualParameter}>View More</Button></Link> 
  </Card.Body>
  </div>
 <div className="aqilevel">
  <h2>
    <p>LIVE AQI INDEX</p>Level</h2>
    </div>
    <img className="aqiicons" src="good.png" />
  </div>
  <ListGroup className="list-group-flush">
    <ListGroupItem><h3>OVERVIEW</h3></ListGroupItem>
    <ListGroupItem><h3>Current air Quality at IBA</h3>
    <Card.Body className='offset-1 row-md-3 row-sm-6' style={{position:"relative"}}>
      <Card.Title>Air Pollution Level &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<> Level </></Card.Title>
      <Card.Title>Air Quality Index &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<>{aqi}</></Card.Title>
      <Card.Title>Main Pollutant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<>PM 2.5</></Card.Title>
    </Card.Body>

    </ListGroupItem>
  </ListGroup>
  {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
</Card>
</div>
  )
}