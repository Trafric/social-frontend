import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="profile/:username"
          element={user ? <Profile /> : <Login />}
        />
        <Route
          path="messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
