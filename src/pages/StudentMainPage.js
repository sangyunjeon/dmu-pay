import Header from '../components/Header';
import './StudentMainPage.css';

function StudentMainPage() {
  return (
    <>
      <Header />
      <div className="student-main">
        <h2>안녕하세요, 학생님 👋</h2>
        <p>이곳에서 포인트를 확인하고, 가맹점 정보를 조회할 수 있어요.</p>
      </div>
    </>
  );
}

export default StudentMainPage;
