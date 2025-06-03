import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentMainPage from './pages/StudentMainPage';
import MerchantMainPage from './pages/MerchantMainPage';
import AdminMainPage from './pages/AdminMainPage';
import SignUpPage from './pages/SignUpPage'; // ⬅️ 회원가입 페이지 import 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* ⬅️ 회원가입 경로 추가 */}
        <Route path="/student" element={<StudentMainPage />} />
        <Route path="/merchant" element={<MerchantMainPage />} />
        <Route path="/admin" element={<AdminMainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
