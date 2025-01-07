import { Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Profile } from './pages/Frofilepage';
import { Selection } from './pages/Modelselectionpage';
import { Chat } from './pages/Chatpage';
import { Navigation } from './Navigation';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="content-container">
        <Routes>
          <Route path='/selection' element={<Selection />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/chat' element={<Chat />}/>
          <Route path='/' element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  )
}

export default App;