
import Grid from '@material-ui/core/Grid'
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { blue } from 'material-ui-colors';
import SvgIcon from '@mui/material/SvgIcon';
import AccessibleIcon from '@mui/icons-material/Accessible';


function MasksOutlined(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const About = (props) => {

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h1 className="h1">About Us</h1>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <Grid container rowSpacing={1} columnSpacing={{ xs: 2, lg: 2, md: 4 }}>
                <Grid item xs={20}>
                  <h2 color="blue"> HEALTH RECOMMENDATIONS</h2>
                  <br/>
                 <h4> How to protect from air pollution </h4>
                 <br/><br/>
                </Grid>
                <Grid item xs={6} fontSize={"15px"}>
                  <MasksOutlinedIcon  color="primary" sx={{ fontSize: 46}}/>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Sensitive Groups should wear 
                  a mask
                </Grid>
                <Grid item xs={6} fontSize={"15px"}>
                <WindowRoundedIcon  color="primary" sx={{ fontSize: 38 }}/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Close Your Window to avoid dirty
    Outdoor air
                </Grid>
                <Grid item xs={6} fontSize={"15px"}>
                < AccessibleIcon  color="primary" sx={{ fontSize: 46}}/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Outdoor Exercise
                </Grid>
                <Grid item xs={6} fontSize={"15px"}>
              <GroupsOutlinedIcon color="primary" sx={{ fontSize: 46 }}/>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Avoid Crowds
                </Grid>
              </Grid>
              {/* <h3>Why Choose Us?</h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon icon="fa-solid fa-mask-face" /> */}
    
    
    </div>
  );
};
