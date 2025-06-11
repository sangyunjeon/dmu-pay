import React from "react";
import "../components/AdminHeader.css";
import AdminHeader from "../components/AdminHeader";
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
  ResponsiveContainer
} from "recharts";

const pointData = [
  { month: "1월", value: 30000 },
  { month: "2월", value: 35000 },
  { month: "3월", value: 150000 },
  { month: "4월", value: 170000 },
  { month: "5월", value: 16000 },
  { month: "6월", value: 370000 },
  { month: "7월", value: 33000 },
  { month: "8월", value: 180000 },
  { month: "9월", value: 150000 },
  { month: "10월", value: 160000 },
  { month: "11월", value: 150000 },
  { month: "12월", value: 250000 }
];

const pieData = [
  { name: "자격증", value: 20 },
  { name: "봉사활동", value: 61 },
  { name: "성적우수", value: 17 },
  { name: "성적향상", value: 2 }
];
const pieColors = ["#0074cc", "#f27052", "#00b894", "#636e72"];

const usageData = [
  { name: "가맹점A", value: 320000 },
  { name: "가맹점B", value: 280000 },
  { name: "가맹점C", value: 210000 },
  { name: "가맹점D", value: 120000 },
  { name: "가맹점E", value: 90000 }
];

function AdminMainPage() {
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
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
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
