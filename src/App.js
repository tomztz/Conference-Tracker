import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/UI/NavBar';
import Card from './Components/UI/Card';
import Sessions from "./Components/Sessions/Sessions";
import Speakers from "./Components/Speakers/Speakers";
import Home from "./Components/Home";
import axios from "axios";
import { useState , useEffect} from 'react';
function App() {
  const [speakers,setState] = useState({datasets : []})
  useEffect(() => {
    axios.get('https://conference-demo-tomztz.herokuapp.com/api/v1/speakers')
    .then((res) => {
      setState({ datasets: res.data})
      console.log(speakers.datasets)
  })
  }, [])

  const [sessions,setSessionsState] = useState({datasets : []})
  useEffect(() => {
    axios.get('https://conference-demo-tomztz.herokuapp.com/api/v1/sessions')
    .then((res) => {
      setSessionsState({ datasets: res.data})
      console.log(sessions.datasets)
  })
  }, [])

  return (
      
      <Router>
        <Header/>
        <Card>
            <Routes>
              <Route path="/sessions/" element={<Sessions data={sessions.datasets} speakerData={speakers.datasets}/> }/>
              <Route path="/speakers/" element={<Speakers data={speakers.datasets}/>}/>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Card>
    </Router>
  );
}

export default App;
