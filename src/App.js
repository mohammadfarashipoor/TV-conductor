import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tabs from './components/Tabs'
import DetailItem from './components/DetailItem';
import EditItem from './components/EditItem'
import {useState}from 'react';



function App() {
  const [itemselected,setItemSelected]=useState();
  const [alertshow,setAlertShow]=useState(null);
  const passItem=(item)=>{
    setItemSelected(item)
  }
  
  const passAlert=(bol)=>{
    setAlertShow(bol)
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs passItem={passItem} alertshow={alertshow}/>} />
        <Route path="add" element={<DetailItem passAlert={passAlert}/>} />
        <Route path="/edit" element={<EditItem itemselected={itemselected} passAlert={passAlert}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
