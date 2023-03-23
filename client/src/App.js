import './App.css';
import Welcome from './components/Welcome';
import {createTheme,ThemeProvider} from '@mui/material'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Form from './components/Form';

function App() {



  const theme=createTheme({
   palette:{
      primary:{
        main:"#b300b3"
      },
      secondary:{
        main:"#660066"
      }
    }
    
  })

  return (
    
    <Router>
    
      
    <ThemeProvider  theme={theme}>
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/check-status" element={<Form/>}></Route>
      </Routes>
    </ThemeProvider >
    </Router>
    
  );
}

export default App;
