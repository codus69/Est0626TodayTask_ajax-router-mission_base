import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <h2>404 - 페이지를 찾을 수 없습니다</h2>
      <p>요청하신 주소는 존재하지 않거나 변경된 페이지입니다.</p>

      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}
