// src/pages/MerchantDetailPage.js

import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminMainPage.css";
import "./MerchantDetailPage.css";

function MerchantDetailPage() {
  return (
    <div className="admin-page">
      <AdminHeader />

      <div className="admin-container">
        <AdminSidebar />

        <div className="admin-content">
          <div className="page-title">
            <h2>가맹점 정보/정산</h2>
            <p className="breadcrumb">HOME &gt; 가맹점 관리 &gt; 가맹점 정보/정산</p>
          </div>

          {/* 요약 정보 박스 */}
          <div className="summary-section">
            <div className="summary-box">
              <p>누적 포인트</p>
              <h3>950,000P</h3>
            </div>
            <div className="summary-box">
              <p>주문건</p>
              <h3>50건</h3>
            </div>
            <div className="summary-box">
              <p>정산금액</p>
              <h3>950,000원</h3>
            </div>
            <div className="summary-button-wrap">
              <button className="settle-button">정산</button>
            </div>
          </div>

          {/* 정산 내역 */}
          <div className="settlement-history">
            <h3 style={{ marginBottom: "10px" }}>■ 가맹점 정산 내역</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>정산일</th>
                  <th>정산포인트</th>
                  <th>정산상태</th>
                  <th>정산처리일</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025.05.01</td>
                  <td>3,000,000P</td>
                  <td className="text-success">정산완료</td>
                  <td>2025.05.03</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2025.04.01</td>
                  <td>3,000,000P</td>
                  <td className="text-success">정산완료</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2025.03.01</td>
                  <td>3,000,000P</td>
                  <td className="text-success">정산완료</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantDetailPage;
