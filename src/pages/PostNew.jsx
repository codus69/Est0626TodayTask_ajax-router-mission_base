import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostNew({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextId = posts.length > 0 ? Math.max(...posts.map((p) => Number(p.id))) + 1 : 1;

    const newPost = {
      id: nextId,
      title: title,
      content: content,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setPosts([...posts, newPost]);

    navigate(`/posts/${nextId}`);
  };

  return (
    <section className="form-container">
      <h2>새 글 작성하기</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목: </label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용: </label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows="5" />
        </div>

        <button type="submit">등록하기</button>
      </form>
    </section>
  );
}
