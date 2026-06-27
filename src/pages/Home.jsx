import { Link } from 'react-router-dom';

export default function Home({ posts }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <section>
      <h2>소개</h2>
      <p>React Router 미션 페이지입니다.</p>

      <h3>최신 글</h3>
      {posts.length === 0 ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        <ul>
          {posts.slice(0, 3).map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
