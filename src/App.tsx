import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './sections/Footer';
import { HomePage } from './pages/Home';
import { BlogIndex } from './pages/Blog/BlogIndex';
import { BlogPostPage } from './pages/Blog/BlogPostPage';
import { NotFoundPage } from './pages/NotFound';

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
