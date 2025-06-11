import React from "react";
import "./AdminHeader.css";

function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <img src="/logo.png" alt="logo" className="admin-logo" />
        <span className="admin-logo-text">DMU-Pay</span>
      </div>

      <div className="admin-header-right">
        Admin 000님 | 로그아웃
      </div>
    </header>
  );
}

export default AdminHeader;
