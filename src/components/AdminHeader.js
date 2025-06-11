import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();                  // 상태 제거
    alert("로그아웃 되었습니다.");
    navigate("/login");                      // navigate로 이동 (학생과 동일)
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-</span>
      </div>
      <nav className="admin-header-nav">
        <button onClick={handleLogout} className="logout-button">
          로그아웃
        </button>
      </nav>
    </header>
  );
}

export default AdminHeader;
