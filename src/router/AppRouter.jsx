import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Category from '../pages/category';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<Category />} />
    </Routes>
  );
}
