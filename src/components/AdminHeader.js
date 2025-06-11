import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 세션이나 로컬스토리지 정리
    sessionStorage.clear(); // 예시
    navigate("/login");     // 로그인 페이지로 이동
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay 관리자</span>
      </div>
      <nav className="admin-header-nav">
        <Link to="/admin/dashboard">대시보드</Link>
        <Link to="/admin/users">회원관리</Link>
        <a href="#logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
          로그아웃
        </a>
      </nav>
    </header>
  );
}

export default AdminHeader;
