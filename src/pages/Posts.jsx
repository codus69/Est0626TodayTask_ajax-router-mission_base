import { Link } from 'react-router-dom';

export default function Posts({ posts }) {
  return (
    <section>
      <h2>전체 글 목록</h2>

      {posts.length === 0 ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
