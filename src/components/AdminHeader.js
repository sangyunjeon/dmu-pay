import React from "react";
import "./AdminHeader.css";

function AdminHeader() {
  const handleLogout = () => {
    sessionStorage.clear();                        // 상태 제거
    alert("로그아웃 되었습니다.");
    window.location.href = "https://dmu-pay.netlify.app/"; // ✅ 배포 주소로 이동
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay 관리자</span>
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
