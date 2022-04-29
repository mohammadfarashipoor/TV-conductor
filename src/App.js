import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tabs from './components/Tabs'
import DetailItem from './components/DetailItem';
import EditItem from './components/EditItem'
import {useState}from 'react';

function App() {
  const [itemselected,setItemSelected]=useState();
  const passItem=(item)=>{
    setItemSelected(item)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs passItem={passItem}/>} />
        <Route path="add" element={<DetailItem />} />
        <Route path="/edit" element={<EditItem itemselected={itemselected}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
