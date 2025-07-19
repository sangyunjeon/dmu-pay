// src/pages/AdminStudentPointEditPage.js

import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminMainPage.css"; // 기존 관리자 레이아웃 스타일 사용

function AdminStudentPointEditPage() {
  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="main-body">
        <AdminSidebar />
        <div className="main-content">
          <h2>학생 포인트 수정 페이지</h2>
          <p>여기서 학생의 포인트를 수정할 수 있습니다. (초기 상태)</p>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPointEditPage;
