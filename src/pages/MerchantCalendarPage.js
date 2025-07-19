// src/pages/MerchantCalendarPage.js
import React, { useState, useEffect } from "react";
import MerchantHeader from "../components/MerchantHeader";
import "./MerchantCalendarPage.css";

function MerchantCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [salesData, setSalesData] = useState({}); // { '2025-05-01': 340000, ... }

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  // 월 이동 핸들러
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  // 해당 월의 달력 데이터 생성
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const calendar = [];
    const startDay = firstDay.getDay(); // 시작 요일 (0: 일요일)
    const totalDays = lastDay.getDate();

    let week = Array(startDay).fill(null);
    for (let date = 1; date <= totalDays; date++) {
      week.push(date);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      calendar.push(week);
    }

    return calendar;
  };

  // 더미 매출 데이터 설정 (나중에 fetch로 대체)
  useEffect(() => {
    const mock = {
      "2025-05-01": 340000,
      "2025-05-06": 600000,
      "2025-05-02": 0,
      "2025-05-08": 120000,
      "2025-05-20": 0,
    };
    setSalesData(mock);
  }, [currentDate]);

  const calendar = generateCalendar();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0부터 시작

  // 총 매출 계산
  const totalSales = Object.values(salesData).reduce((acc, cur) => acc + cur, 0);

  // 최고/최저 값 계산
  const salesValues = Object.values(salesData);
  const maxSales = Math.max(...salesValues);
  const minSales = Math.min(...salesValues);

  return (
    <div className="merchant-calendar-page">
      <MerchantHeader
        storeName="가게 이름"
        owner="000 사장님"
        onLogout={handleLogout}
      />

      {/* 상단 제목 + 월 이동 + 총매출 */}
      <div className="calendar-header">
        <h2>매출달력</h2>
        <div className="calendar-controls">
          <strong>{year}년 {month + 1}월</strong>
          <button onClick={() => changeMonth(-1)}>◀</button>
          <button onClick={() => changeMonth(1)}>▶</button>
          <div className="total-sales">
            총 매출 금액: <strong>{totalSales.toLocaleString()}원</strong>
          </div>
        </div>
      </div>

      {/* 최고/최저 범례 */}
      <div className="legend">
        <span className="low">● 최저</span>
        <span className="high">● 최고</span>
      </div>

      {/* 달력 */}
      <table className="calendar-table">
        <thead>
          <tr>
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => {
                const dateKey =
                  date !== null
                    ? `${year}-${String(month + 1).padStart(2, "0")}-${String(
                        date
                      ).padStart(2, "0")}`
                    : null;
                const sales = dateKey && salesData[dateKey];
                const isMax = sales === maxSales;
                const isMin = sales === minSales;

                return (
                  <td key={j} className="calendar-cell">
                    {date && (
                      <>
                        <div className="date-num">{date}</div>
                        {sales !== undefined && (
                          <div
                            className={`sales-amount ${
                              isMax ? "high" : isMin ? "low" : ""
                            }`}
                          >
                            {sales.toLocaleString()}
                          </div>
                        )}
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MerchantCalendarPage;
