// src/pages/MerchantCalendarPage.js

import React, { useState } from "react";
import MerchantHeader from "../components/MerchantHeader";
import "./MerchantCalendarPage.css";

function MerchantCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentMonth(prev);
  };

  const handleNextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };

  const formatYearMonth = (date) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  // 📌 예시 매출 데이터
  const dummySales = {
    "2025-05-01": 340000,
    "2025-05-06": 600000,
  };

  const totalSales = Object.values(dummySales).reduce((a, b) => a + b, 0);
  const min = Math.min(...Object.values(dummySales));
  const max = Math.max(...Object.values(dummySales));

  return (
    <div className="calendar-page">
      <MerchantHeader
        storeName="가게 이름"
        owner="000 사장님"
        onLogout={() => (window.location.href = "/login")}
      />

      <div className="calendar-header">
        <h2>매출달력</h2>
        <div className="month-control">
          <button onClick={handlePrevMonth}>◀</button>
          <span>{formatYearMonth(currentMonth)}</span>
          <button onClick={handleNextMonth}>▶</button>
        </div>
        <div className="total-amount">총 매출 금액: {totalSales.toLocaleString()}원</div>
      </div>

      <div className="calendar-legend">
        <span className="dot blue" /> 최저
        <span className="dot red" style={{ marginLeft: "20px" }} /> 최고
      </div>

      <div className="calendar-box">
        <table className="calendar-table">
          <thead>
            <tr>
              {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gray">29</td>
              <td className="gray">30</td>
              <td>1<br /><span className="blue">340,000</span></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6<br /><span className="red">600,000</span></td>
              <td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MerchantCalendarPage;
