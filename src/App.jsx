import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import { useState, useEffect } from 'react';

import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import PostNew from './pages/PostNew.jsx';
import PostDetail from './pages/PostDetail.jsx';
import PostEdit from './pages/PostEdit.jsx';
import NotFound from './pages/NotFound.jsx';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/data/blog.json')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoaded(true);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route path="posts/new" element={<PostNew />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="posts/:id/edit" element={<PostEdit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
