import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ 페이지 이동을 위해 추가
import "./AdminHeader.css";

function AdminHeader({ handleLogout }) {
  const navigate = useNavigate(); // ✅ navigate 준비

  return (
    <header className="admin-header">
      <div
        className="admin-header-left"
        onClick={() => navigate("/admin")} // ✅ 클릭 시 메인페이지로 이동
        style={{ cursor: "pointer" }} // ✅ 마우스 커서 포인터 스타일 추가
      >
        <img src="/logo.png" alt="로고" className="admin-logo" />
        <span className="admin-title">DMU-Pay (관리자)</span>
      </div>

      <nav className="admin-header-nav">
        <button onClick={handleLogout} className="logout-button desktop-only">
          로그아웃
        </button>
      </nav>
    </header>
  );
}

export default AdminHeader;
