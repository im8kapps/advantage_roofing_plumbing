import { Routes, Route } from 'react-router-dom';
import { ScrollToHash } from './components/ScrollToHash';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </>
  );
}

export default App;
