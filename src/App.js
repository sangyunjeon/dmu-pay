import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StudentMainPage from "./pages/StudentMainPage";
import MerchantMainPage from "./pages/MerchantMainPage";
import AdminMainPage from "./pages/AdminMainPage";
import AdminStudentPage from "./pages/AdminStudentPage";
import AdminMerchantPage from "./pages/AdminMerchantPage";
import StudentPointHistoryPage from "./pages/StudentPointHistoryPage";
import StudentRankingPage from "./pages/StudentRankingPage";  
import MerchantInfoPage from "./pages/MerchantInfoPage";
import MyPage from "./pages/MyPage";
import AdminMerchantRegisterPage from './pages/AdminMerchantRegisterPage';
import AdminMerchantEditPage from './pages/AdminMerchantEditPage';
import AdminMerchantDetailPage from "./pages/AdminMerchantDetailPage";
import AdminStudentPointPage from './pages/AdminStudentPointPage';
import AdminStudentPointEditPage from "./pages/AdminStudentPointEditPage";



function App() {
  return (
    <Router>
      <Routes>
        {/* "/" 접근 시 자동으로 "/login"으로 리디렉트 */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 로그인/회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* 메인 페이지들 */}
        <Route path="/student" element={<StudentMainPage />} />
        <Route path="/merchant" element={<MerchantMainPage />} />
        <Route path="/admin" element={<AdminMainPage />} />

        {/* 학생 - 페이지 */}
        <Route path="/point-history" element={<StudentPointHistoryPage />} />
        <Route path="/ranking" element={<StudentRankingPage />} />
        <Route path="/merchants" element={<MerchantInfoPage />} />
        <Route path="/mypage" element={<MyPage />} />

        {/*  관리자 - 학생/가맹점 관리 페이지 */}
        <Route path="/admin/student" element={<AdminStudentPage />} />
        <Route path="/admin/merchant" element={<AdminMerchantPage />} /> {/*  추가 */}

        {/*  관리자 - 가맹점 등록 / 수정 /  */}
        <Route path="/admin/merchant/register" element={<AdminMerchantRegisterPage />} />
        <Route path="/admin/merchant/edit/:code" element={<AdminMerchantEditPage />} />
        <Route path="/admin/merchant/detail/:code" element={<AdminMerchantDetailPage />} />


        {/*  관리자 - 학생관리 / 포인트 내역 / 포인트지급/차감 */}
        <Route path="/admin/student/point/:studentId" element={<AdminStudentPointPage />} />
        <Route path="/admin/student/point-edit" element={<AdminStudentPointEditPage />} />
     

      </Routes>
    </Router>
  );
}

export default App;
