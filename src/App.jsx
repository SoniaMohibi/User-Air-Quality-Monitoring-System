import { useState, useEffect } from "react";
import { BrowserRouter as Router,Route, Routes  } from "react-router-dom";
import { Navigation } from "./components/navigation";
import {Aqicards} from "./components/aqicards";
import { Header } from "./components/header";
import { Aqihistory } from "./components/aqihistory";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import {Aqi} from "./components/aqi"
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { IndividualParameter } from "./components/individualParameter";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  return (
    <div> 
        <Router> 
      <Navigation />
      <Header data={landingPageData.Header} />
      <Aqi data={landingPageData.Aqi}/>
      <Aqihistory data={landingPageData.Aqihistory} />
      <Aqicards data={landingPageData.Aqicards}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact  data={landingPageData.Contact} />
        <Routes>
        <Route path="/parameters" component={IndividualParameter}/>
       </Routes>
      </Router>
    </div>
  );
};

export default App;
