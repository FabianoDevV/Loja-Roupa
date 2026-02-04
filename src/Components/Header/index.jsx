import { useContext } from 'react';
import './Header.css';
import { User, SearchIcon, ShoppingCart } from 'lucide-react';
import { dateContext } from '../../context/dateContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { cart } = useContext(dateContext);

  const qtdCart = cart.length;
  return (
    <>
      <header>
        <div className="logor_loja">
          <span className="logor">DevShop</span>
        </div>

        <div className="search-header">
          <SearchIcon />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Buscar produtos..."
            autoComplete="off"
          />
        </div>

        <div className="action-header">
          <ul>
            <li>
              <a href="#">
                <User />
                Conta
              </a>
            </li>
            <li>
              <a href="#">
                <span className="cart-icon">
                  {qtdCart >= 1 && <span className="cart-qty">{qtdCart}</span>}
                  <ShoppingCart />
                </span>
                Carrinho
              </a>
            </li>
          </ul>
        </div>
      </header>

      {qtdCart > 0 && (
        <div className="icon-cart-fixed">
          <span className="cart-icon-flutuante">
            {qtdCart >= 1 && <span className="cart-qty">{qtdCart}</span>}
            <ShoppingCart />
          </span>
        </div>
      )}

      <nav className="menu-sticky">
        <ul>
          <li>
            <Link to="/category/Clothes">Roupas</Link>
          </li>
          <li>
            <Link to="/category/Electronics">Eletrônicos</Link>
          </li>
          <li>
            <Link to="/category/Furniture">Móveis</Link>
          </li>
          <li>
            <Link to="/category/Shoes">Sapatos</Link>
          </li>
          <li>
            <Link to="/category/Miscellaneous">Diversos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
