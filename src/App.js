import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/student" element={<StudentMainPage />} />
        <Route path="/merchant" element={<MerchantMainPage />} />
        <Route path="/admin" element={<AdminMainPage />} />
        <Route path="/point-history" element={<PointHistoryPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/merchants" element={<MerchantInfoPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
