// src/pages/MerchantSalesPage.js
import React, { useState } from "react";
import "./MerchantSalesPage.css";

function MerchantSalesPage() {
  const [selectedDate, setSelectedDate] = useState("2025-05-26");
  const [filter, setFilter] = useState("today");

  return (
    <div className="sales-page">
      <h2 className="page-title">매출현황</h2>

      {/* 날짜 필터 */}
      <div className="date-filter">
        {["yesterday", "today", "week", "month"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {{
              yesterday: "어제",
              today: "오늘",
              week: "이번주",
              month: "이번달"
            }[type]}
          </button>
        ))}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* 정산 금액 */}
      <div className="settlement-box">
        이번 달 정산금액: <strong>3,200,000원</strong>
      </div>

      {/* 통계 요약 */}
      <div className="summary-box">
        <div className="summary-item">
          <p>매출</p>
          <h3>1,000,000원</h3>
        </div>
        <div className="summary-item">
          <p>주문건</p>
          <h3>50건</h3>
        </div>
        <div className="summary-item">
          <p>반품</p>
          <h3>-5,000원</h3>
        </div>
        <div className="summary-item">
          <p>평균결제금액</p>
          <h3>9,000원</h3>
        </div>
      </div>
    </div>
  );
}

export default MerchantSalesPage;
