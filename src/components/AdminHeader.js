import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="logo" className="admin-logo" />
        <span className="admin-logo-text">DMU-Pay</span>
      </div>

      <div className="admin-header-right">
        <span className="admin-name">Admin 님</span>
        <button className="admin-logout" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
