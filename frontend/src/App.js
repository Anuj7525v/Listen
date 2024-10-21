import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramList from './components/ProgramList/ProgramList';
import ProgramDetails from './components/ProgramDetails/ProgramDetails';
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProgramList/>} />
      <Route path="/programs" element={<ProgramList/>} />
      <Route path="/progams/:id"  element={<ProgramDetails/>} />
      <Route path='/program/:id/track/:trackId' element={<AudioPlayer/>} />
      
    </Routes>
   </BrowserRouter>
    
   

  );
}

export default App;
