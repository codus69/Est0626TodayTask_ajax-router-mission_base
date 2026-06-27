import { useParams, useNavigate } from 'react-router-dom';

export default function PostDetail({ posts, setPosts }) {
  const { id } = useParams();

  let navigate = useNavigate();

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return <div>존재 하지 않는 글입니다.</div>;
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>작성일: {post.createdAt}</p>
      <hr />
      <div>{post.content}</div>

      <br />
      <button
        onClick={() => {
          if (window.confirm('정말로 이 글을 삭제하시겠습니까?')) {
            setPosts(posts.filter((p) => String(p.id) !== String(id)));
            navigate('/posts');
          }
        }}
      >
        삭제하기
      </button>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>수정하기</button>
    </article>
  );
}
