import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar"; // ✅ 사이드바 컴포넌트 import
import "./AdminMainPage.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const pointData = [
  { month: "1월", value: 202500 },
  { month: "2월", value: 305000 },
  { month: "3월", value: 412000 },
  { month: "4월", value: 263000 },
  { month: "5월", value: 364500 },
  { month: "6월", value: 124000 },
  { month: "7월", value: 241200 },
];

const pieData = [
  { name: "참여", value: 50 },
  { name: "봉사", value: 25 },
  { name: "자격증", value: 15 },
  { name: "기타", value: 10 },
];

const pieColors = ["#0074cc", "#f27052", "#00b894", "#636e72"];

const usageData = [
  { name: "가맹점 A", value: 200400 },
  { name: "가맹점 B", value: 312000 },
  { name: "가맹점 C", value: 176000 },
  { name: "가맹점 D", value: 99200 },
];

function AdminMainPage() {
  

  const handleLogout = () => {
    sessionStorage.clear();
    alert("로그아웃 되었습니다.");
    window.location.href = "https://dmu-pay.netlify.app/";
  };

  return (
    <div className="admin-page">
      <AdminHeader handleLogout={handleLogout} />

      <div className="main-body">
        <AdminSidebar handleLogout={handleLogout} /> {/* ✅ 컴포넌트로 변경 */}

        <div className="main-content">
          <h2 className="title">포인트 지급</h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={pointData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0074cc"
                name="포인트 지급"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="chart-section">
            <div className="pie-chart">
              <h3>지급 종류</h3>
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
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
