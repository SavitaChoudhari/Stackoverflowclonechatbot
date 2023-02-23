import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import TopNavbar from "./components/Navbar/TopNavbar"
import Auth from "./Pages/Auth"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Teams from "./Pages/Teams"
import Home from "./Pages/Home"
import AskQuestion from "./Pages/AskQuestion"
import './App.css';
import QuestionsPage from "./Pages/QuestionsPage"

// import MyChatbot from "./Pages/my_chatbot"

import config from "./config"
import ActionProvider from "./ActionProvider"
import MessageParser from "./MessageParser"
import Chatbot from 'react-chatbot-kit'
import "react-chatbot-kit/build/main.css";
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';


function App() {

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const popupStyles = {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: 800,
    
  };

  const containerStyles = {
    display: 'flex',
    color: 'red',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2vh',    
    height: '5vh',
  };

  const btnContainerStyles = {
    display: 'flex',
    color: '#000',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
    height: '5vh',
    width: '215vh',
  };

  return (
    <Router>
      <TopNavbar/>
      <Button style={btnContainerStyles} variant="primary" onClick={handleOpenPopup}>
        Chatbot
      </Button>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Auth" element={<Auth/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/AskQuestion" element={<AskQuestion/>}/>
        <Route path="/question/:id" element={<QuestionsPage/>}/>

      </Routes>

      <Modal show={showPopup} onHide={handleClosePopup} style={popupStyles}>
        <Modal.Header closeButton>
        <Button variant="secondary" onClick={handleClosePopup} style={containerStyles}>
            X
            {/* Close */}
          </Button>
          {/* <Modal.Title>Popup Title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {/* <p>Popup content goes here.</p> */}
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>      

        </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>

    </Router>

    
  );
}

export default App;
