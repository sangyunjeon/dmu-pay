// src/pages/AdminStudentPointEditPage.js

import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminStudentPointEditPage.css";

function AdminStudentPointEditPage() {
  const [fileInputs, setFileInputs] = useState(["", ""]);
  const [deductionDetail, setDeductionDetail] = useState("");

  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar />
        <div className="admin-content">
          <h2 className="page-title">학생 포인트 지급/차감</h2>
          <div className="breadcrumb">HOME &gt; 학생 관리 &gt; 학생 포인트 지급/차감</div>

          <section className="student-info">
            <h3 className="section-title">■ 학생 정보
            </h3>
            <table className="info-table">
              <tbody>
                <tr><th>이름</th><td>읽기 전용</td><th>학번</th><td>읽기 전용</td></tr>
                <tr><th>전공</th><td>읽기 전용</td><th>현재 포인트</th><td>읽기 전용</td></tr>
              </tbody>
            </table>
          </section>

          <section className="point-section">
            <h3 className="section-title">■ 포인트 지급
            </h3>
            <table className="point-table">
              <tbody>
                <tr><th>지급 종류</th><td colSpan={3}>기타</td></tr>
                <tr>
                  <th>파일등록</th>
                  <td colSpan={3}>
                    {fileInputs.map((file, idx) => (
                      <input
                        key={idx}
                        type="file"
                        accept=".png"
                        className="file-input"
                      />
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="submit-button">지급</button>
          </section>

          <section className="point-section">
            <h3 className="section-title">■ 포인트 차감
            </h3>
            <table className="point-table">
              <tbody>
                <tr><th>차감 종류</th><td>기타</td></tr>
                <tr><th>상세이유</th><td><textarea value={deductionDetail} onChange={(e) => setDeductionDetail(e.target.value)} /></td></tr>
              </tbody>
            </table>
            <button className="submit-button">차감</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPointEditPage;
