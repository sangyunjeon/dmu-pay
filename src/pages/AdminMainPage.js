import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/AdminHeader.css";
import AdminHeader from "../components/AdminHeader";
import "./AdminMainPage.css";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar, ResponsiveContainer
} from "recharts";

const pointData = [ /* 생략 */ ];
const pieData = [ /* 생략 */ ];
const pieColors = [ "#0074cc", "#f27052", "#00b894", "#636e72" ];
const usageData = [ /* 생략 */ ];

function AdminMainPage() {
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("admin");

    if (!isAdmin) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      setIsAuthChecked(true); // 로그인 인증 통과
    }
  }, [navigate]);

  if (!isAuthChecked) return null; // 인증 확인되기 전엔 아무것도 렌더링하지 않음

  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="main-body">
        <div className="sidebar">
          <ul>
            <li>학생관리</li>
            <li>가맹점관리</li>
          </ul>
        </div>

        <div className="main-content">
          <h2 className="title">포인트 지급</h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={pointData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#0074cc" name="포인트 지급" />
            </LineChart>
          </ResponsiveContainer>

          <div className="chart-section">
            <div className="pie-chart">
              <h3>지급 종류</h3>
              <PieChart width={300} height={300}>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>

            <div className="bar-chart">
              <h3>이번 달 가맹점 수입</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0074cc" name="월별사용량" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMainPage;
