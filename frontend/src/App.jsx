import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage';
import ThemeSelection from './pages/ThemeSelection';
import MenuCreation from './pages/MenuCreation';
import Qrcode from './pages/QrCode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/theme" element={<ThemeSelection />} />
        <Route path="/create-menu" element={<MenuCreation />} />
        <Route path="/qrcode" element={<Qrcode />} />
      </Routes>
    </Router>
  );
}

export default App;
