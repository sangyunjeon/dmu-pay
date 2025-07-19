import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminMainPage.css"; // 공통 스타일
import "./AdminStudentPointEditPage.css"; // 새 스타일 파일 별도 생성 추천

function AdminStudentPointEditPage() {
  return (
    <div className="admin-page">
      <AdminHeader />
      <div className="main-body">
        <AdminSidebar />
        <div className="main-content">
          <h2>학생 포인트 지급/차감</h2>
         

          {/* 학생 정보 */}
          <section className="student-info">
            <h3>학생 정보</h3>
            <table>
              <tbody>
                <tr>
                  <th>이름</th><td>읽기 전용</td>
                  <th>학번</th><td>읽기 전용</td>
                </tr>
                <tr>
                  <th>전공</th><td>읽기 전용</td>
                  <th>현재 포인트</th><td>읽기 전용</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 포인트 지급 */}
          <section className="point-section">
            <h3>포인트 지급</h3>
            <table>
              <tbody>
                <tr>
                  <th>지급 종류</th>
                  <td colSpan={3}><input type="text" placeholder="예: 자격증, 대외활동 등" /></td>
                </tr>
                <tr>
                  <th>파일등록</th>
                  <td colSpan={3}>
                    <input type="file" /> <input type="text" placeholder="파일 설명 (예: 자격증.png)" />
                  </td>
                </tr>
                <tr>
                  <th>파일등록</th>
                  <td colSpan={3}>
                    <input type="file" /> <input type="text" placeholder="파일 설명 (예: 자격증.png)" />
                  </td>
                </tr>
                <tr>
                  <th>지급 포인트</th>
                  <td colSpan={3}><input type="number" placeholder="예: 10000" /></td>
                </tr>
              </tbody>
            </table>
            <button className="action-button">지급</button>
          </section>

          {/* 포인트 차감 */}
          <section className="point-section">
            <h3>포인트 차감</h3>
            <table>
              <tbody>
                <tr>
                  <th>차감 종류</th>
                  <td><input type="text" placeholder="예: 부정사용, 규정위반" /></td>
                  <th>차감 포인트</th>
                  <td><input type="number" placeholder="예: 5000" /></td>
                </tr>
                <tr>
                  <th>상세이유</th>
                  <td colSpan={3}><textarea placeholder="차감 사유를 입력하세요" rows="3"></textarea></td>
                </tr>
              </tbody>
            </table>
            <button className="action-button">차감</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminStudentPointEditPage;
