// src/pages/AdminStudentPage.js

import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import "./AdminMainPage.css"; // 기존 admin 스타일 재사용

function AdminStudentPage() {
  const [searchName, setSearchName] = useState("");
  const [searchStudentNumber, setSearchStudentNumber] = useState("");

  // 더미 학생 데이터
  const students = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "이름",
    studentNumber: "20221598",
    point: 150000,
  }));

  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="main-body">
        <div className="sidebar">
          <ul>
            <li className="active">학생관리</li>
            <li>가맹점관리</li>
          </ul>
        </div>

        <div className="main-content">
          {/* 🔍 검색 영역 */}
          <div className="card" style={{ marginBottom: "30px" }}>
            <h3>검색</h3>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              style={{ width: "300px", marginRight: "10px", padding: "10px" }}
            />
            <input
              type="text"
              placeholder="학번을 입력해주세요"
              value={searchStudentNumber}
              onChange={(e) => setSearchStudentNumber(e.target.value)}
              style={{ width: "300px", marginRight: "10px", padding: "10px" }}
            />
            <button style={{ padding: "10px 20px" }}>검색</button>
          </div>

          {/* 📋 테이블 영역 */}
          <div className="card">
            <table className="history-table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>이름</th>
                  <th>학번</th>
                  <th>포인트</th>
                  <th>포인트 내역</th>
                  <th>포인트 지급/차감</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr key={s.id}>
                    <td>{index + 1}</td>
                    <td>{s.name}</td>
                    <td>{s.studentNumber}</td>
                    <td>{s.point.toLocaleString()}P</td>
                    <td>
                      <button>보기</button>
                    </td>
                    <td>
                      <button>수정</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ⏩ 페이지네이션 */}
            <div className="pagination" style={{ marginTop: "20px" }}>
              <button>&laquo;</button>
              <button>&lt;</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>&gt;</button>
              <button>&raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPage;
