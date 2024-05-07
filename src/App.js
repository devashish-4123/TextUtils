import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';



// let name ="Deva";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message , type) => {
    setalert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setalert(null);
    }, 4000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#4D4D4D'
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled", "success");
    }  
  }

  return (
  <>
    <Navbar title= "TextUtils" contact= "Contact Me" mode ={mode} toggleMode={toggleMode} />
    <Alert alert ={alert}/>
    <div className="container my-3">
    <Textform  showAlert={showAlert} heading="Enter Your Text To Analyze" mode ={mode}/>
    </div>
  </>
  );
}

export default App;
