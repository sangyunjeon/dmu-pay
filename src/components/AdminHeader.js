import React from "react";
import "./AdminHeader.css";

function AdminHeader() {
  const handleLogout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    window.location.href = "https://dmu-pay.netlify.app/";
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay (관리자)</span>
      </div>
      <nav className="admin-header-nav desktop-only">
        <button onClick={handleLogout} className="logout-button">
          로그아웃
        </button>
      </nav>
    </header>
  );
}

export default AdminHeader;
