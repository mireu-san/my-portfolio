import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Particles from "react-particles-js";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import About from "./About";
import Profile from "./Profile";
import Thoughts from "./Thoughts";
import Contacts from "./Contacts";

function App() {
  return (
    <>

    
      <Particles
        className="particles-canvas"
          params={{
            particles: {
            number: {
            value: 30,
            density: {
            enable: true,
            value_area: 900
            }},
            shape: {
            type: "star",
            stroke: {
            width: 6,
            color: "#f9ab00"
            }}}}}
      />

    <Navbar />
    <Header />

      <div className="pages">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/thoughts" component={Thoughts} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>



    </>
    
  );
}

export default App;
