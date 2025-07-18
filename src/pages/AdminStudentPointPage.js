// src/pages/AdminStudentPointPage.js

import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminMainPage.css";
import "./AdminStudentPointPage.css";

function AdminStudentPointPage() {
  const [filter, setFilter] = useState("전체");

  const allData = [
    { date: "2025.05.27", type: "지급", point: 50000, reason: "자격증" },
    { date: "2025.05.27", type: "사용", point: -4500, reason: "00커피" },
    { date: "2025.05.27", type: "차감", point: -7000, reason: "00커피 환불" },
    { date: "2025.05.27", type: "지급", point: 50000, reason: "자격증" },
    // 더미 데이터 계속 추가 가능
  ];

  const filteredData =
    filter === "전체" ? allData : allData.filter((item) => item.type === filter);

  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar />

        <div className="admin-content">
          <h2>학생 포인트 내역</h2>
          <p className="breadcrumb">HOME &gt; 학생 관리 &gt; 학생 포인트내역</p>

          <div className="student-info">
            <p><strong>이름:</strong> 박수민</p>
            <p><strong>학번:</strong> 20221598</p>
          </div>

          <div className="filter-bar">
            <button className="sort-btn">최신순</button>
            <label><input type="radio" name="type" onChange={() => setFilter("사용")} /> 사용</label>
            <label><input type="radio" name="type" onChange={() => setFilter("지급")} /> 지급</label>
            <label><input type="radio" name="type" onChange={() => setFilter("차감")} /> 차감</label>
          </div>

          <table className="point-history-table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>유형</th>
                <th>포인트</th>
                <th>사유</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td className={item.point > 0 ? "text-plus" : "text-minus"}>
                    {item.point > 0 ? `+${item.point.toLocaleString()}` : item.point.toLocaleString()}
                  </td>
                  <td>{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button>&laquo;</button>
            <button>&lt;</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>&gt;</button>
            <button>&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPointPage;
