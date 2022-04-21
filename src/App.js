import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tabs from './components/Tabs'
import DetailItem from './components/DetailItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="add" element={<DetailItem />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
