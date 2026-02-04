import './category.css';
import { categorias } from '../../data/Category';
import { Shirt, Laptop, Sofa, ShoppingBag, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryCard() {
  const iconMap = {
    Shirt: <Shirt />,
    Laptop: <Laptop />,
    Sofa: <Sofa />,
    ShoppingBag: <ShoppingBag />,
    LayoutGrid: <LayoutGrid />,
  };

  return categorias.map((category) => {
    const { nome, name, id, icone, cor } = category;
    const ColorCard = {
      background: cor,
    };
    return (
      <div key={id} className="category-card">
        <Link to={'/category/' + name}>
          <div className="icone-category" style={ColorCard}>
            {iconMap[icone]}
          </div>
          <div className="name-category">{nome}</div>
        </Link>
      </div>
    );
  });
}
