import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentMainPage from './pages/StudentMainPage';
import MerchantMainPage from './pages/MerchantMainPage';
import AdminMainPage from './pages/AdminMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentMainPage />} />
        <Route path="/merchant" element={<MerchantMainPage />} />
        <Route path="/admin" element={<AdminMainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
