import Hero from "./Components/Hero";
import Guide from "./Components/Guide";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import React,{useState , useEffect } from 'react'
import Form from "./Components/Form";
import Head from "./Components/Head";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  
   
  return <>
    
    <Hero/>
    <Form />
    <Guide />
    <Details/>
    <Footer/>
    {/* Checking the api  */}
    {/* {(typeof data.members === 'undefined')?(
      <p>Loading..</p>
    ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ) )
          )} */}
  </>;
}

export default App;
