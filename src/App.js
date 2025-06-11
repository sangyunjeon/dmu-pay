import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentMainPage from "./pages/StudentMainPage";
import MerchantMainPage from "./pages/MerchantMainPage";
import AdminMainPage from "./pages/AdminMainPage";
import SignUpPage from "./pages/SignUpPage";
import PointHistoryPage from "./pages/PointHistoryPage";
import RankingPage from "./pages/RankingPage";
import MerchantInfoPage from './pages/MerchantInfoPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* "/" 접근 시 자동으로 "/login"으로 리디렉트 */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* 로그인 관련 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* 메인 페이지들 */}
        <Route path="/student" element={<StudentMainPage />} />
        <Route path="/merchant" element={<MerchantMainPage />} />
        <Route path="/admin" element={<AdminMainPage />} />

        {/* 서브 페이지들 */}
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/merchants" element={<MerchantInfoPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
