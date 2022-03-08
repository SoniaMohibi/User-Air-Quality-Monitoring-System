 import {Nav} from "react-bootstrap";
 

export const Navigation = (props) => {
   return (
    <Nav defaultActiveKey="/home"  id='menu' className='navbar navbar-default'>
    <Nav.Link href="#page-top" className="navbar-brand page-scroll">
      <img className="logo" src="icon.png" alt="icon"/></Nav.Link>
    <Nav.Link href="/home" className='page-scroll'><b> Home</b></Nav.Link>
    <Nav.Link href="#about"  className='page-scroll'><b>About Us</b></Nav.Link>
    <Nav.Link href="#features" className='page-scroll'><b>AQI History</b></Nav.Link>
    <Nav.Link href="#contact"  className='page-scroll' ><b>Contact</b>
    </Nav.Link>
  </Nav>
  
  )
}

