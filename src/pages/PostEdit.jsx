import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostEdit({ posts, setPosts }) {
  const { id } = useParams();
  let navigate = useNavigate();

  const post = posts.find((p) => String(p.id) === String(id));

  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  if (!post) {
    return <div>존재 하지 않는 글입니다.</div>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedPosts = posts.map((p) => {
      if (String(p.id) === String(id)) {
        return {
          ...p,
          title: title,
          content: content,
        };
      }
      return p;
    });

    setPosts(updatedPosts);

    navigate(`/posts/${id}`);
  };

  return (
    <section className="form-container">
      <h2>글 수정하기</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="title">제목:</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows="" />
        </div>

        <button type="submit">수정완료</button>
      </form>
    </section>
  );
}
