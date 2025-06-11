import React from "react";
import "./AdminHeader.css";

function AdminHeader() {
  const handleLogout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    window.location.href = "/"; // ✅ "/"로 이동하면 LoginPage로 연결됨
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay Admin</span>
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
