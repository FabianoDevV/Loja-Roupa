import './Header.css';
import { User, SearchIcon, ShoppingCart } from 'lucide-react';

export default function Header() {
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
                <ShoppingCart />
                Carrinho
              </a>
            </li>
          </ul>
        </div>
      </header>

      <nav className="menu-sticky">
        <ul>
          <li>
            <a href="#">Roupas</a>
          </li>
          <li>
            <a href="#">Eletrônicos</a>
          </li>
          <li>
            <a href="#">Móveis</a>
          </li>
          <li>
            <a href="#">Sapatos</a>
          </li>
          <li>
            <a href="#">Diversos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
