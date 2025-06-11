import Header from '../components/Header';
import './StudentMainPage.css';

function StudentMainPage() {
  return (
    <>
      <Header />
      <div className="student-main">

        <div className="main-grid">
          {/* 학생 정보 */}
          <div className="card student-info">
            <h3>동양미래대학교 20221598 박수민</h3>
          </div>

          {/* 결제하기 버튼 */}
          <div className="card payment-box">
            <p>결제하기</p>
          </div>

          {/* 최근 활동 내역 */}
          <div className="card activity-log">
            <h4>최근 활동 내역</h4>
            <div className="activity-item">
              <span className="date">2025.05.24</span>
              <span>자격증 등록</span>
              <span className="point plus">+500P</span>
            </div>
            <div className="activity-item">
              <span className="date">2025.05.23</span>
              <span>모닝글로리</span>
              <span className="point minus">-1500P</span>
            </div>
          </div>

          {/* 가맹점 안내 */}
          <div className="card store-guide">
            <h4>가맹점 안내</h4>
            <p>근처 가게에서 고유코드만 입력하면 결제 완료</p>
            <button className="store-btn">가맹점 찾기</button>
          </div>

          {/* 여유 공간 */}
          <div className="card extra-box">
            {/* 필요 시 추가 내용 작성 */}
          </div>
        </div>

      </div>
    </>
  );
}

export default StudentMainPage;
