import React from "react";
import "./AdminHeader.css";

function AdminHeader({ handleLogout }) {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay (관리자)</span>
      </div>
      <nav className="admin-header-nav">
        {/* ✅ 데스크탑에서만 보이게 하기 위해 클래스 2개 적용 */}
        <button onClick={handleLogout} className="logout-button desktop-only">
          로그아웃
        </button>
      </nav>
    </header>
  );
}

export default AdminHeader;
