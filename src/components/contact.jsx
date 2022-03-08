import { useState } from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
const initialState = {
  name: '',
  email: '',
  subject:'',
  message: '',
  date : new Date().toISOString(),
}
export const Contact = (props) => {
  const [user, setState] = useState(initialState)
  
          let name,value;
          const getUserData = (e) => {
            name=e.target.name
            value=e.target.value
            setState({...user,[name]:value})
          }
            
  const clearState = () => setState({ ...initialState })

  const handleSubmit =async  (e) => {
    e.preventDefault()
    
    const {name,email,subject,message,date}=user
    const res= await fetch("https://realtimeaqi-9a479-default-rtdb.firebaseio.com/userSuggestionsForm.json", 
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name,
        email,
        subject,
        message,
        date
      })
    });
    if(res)
    clearState();
    alert("Your Feedback has been recorded\nThank You For Your Suggestion")
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  If You have any Query, fill out the form below to send us any message and suggestion about our site and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit} method="POST" className='contactForm'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                       value={user.name}
                        required
                        onChange={getUserData}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                       value={user.email}
                        required
                        onChange={getUserData}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='form-control'
                        rows='2'
                        placeholder='Subject'
                       value={user.subject}
                        required
                        onChange={getUserData}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                   value={user.message}
                    required
                    onChange={getUserData}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i ><FacebookRoundedIcon  sx={{ fontSize: 36}}/></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i><WhatsappRoundedIcon sx={{ fontSize: 36}}/></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i><TwitterIcon color="white" sx={{ fontSize: 36}}/></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
          Copyright  &copy;  2022 Smart AQI
        
          </p>
        </div>
      </div>
    </div>
  )
}