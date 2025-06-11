// src/components/AdminHeader.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();                  // 세션 제거
    alert("로그아웃 되었습니다.");            // 알림 출력
    navigate("/login");                      // 로그인 페이지로 이동
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay 관리자</span>
      </div>
      <nav className="admin-header-nav">
        <a href="#logout" onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}>
          로그아웃
        </a>
      </nav>
    </header>
  );
}

export default AdminHeader;
