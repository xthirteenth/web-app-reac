import { Routes, Route } from 'react-router-dom';
import { Profile } from './pages/Frofilepage';
import { Home } from './pages/Homepage';
import { Selection } from './pages/Modelselectionpage';
import { Chat } from './pages/Chatpage';
import { Navigation } from './Navigation';

function App() {
  return (
    <div className="main">
      <div className="content-container">
        <Routes>
          <Route path='/selection' element={<Selection />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </div>
      <Navigation />
    </div>
  )
}

export default App