import { ArrowRight, ShoppingBasketIcon } from 'lucide-react';

import './style-home.css';

import TitleSection from '../../Components/TitleSection';
import Cards from '../../Components/Cards';
import BtnPrimary from '../../Components/BtnPrimary';

import Error from '../../Components/Error';
import Loading from '../../Components/Loading';

import { useContext } from 'react';
import { dateContext } from '../../context/dateContext';
import Category from '../../Components/CategoryCard';

export default function Home() {
  const { error, loading } = useContext(dateContext);
  return (
    <main>
      <section className="hero">
        <div className="context-hero">
          <div className="infor-hero">
            <h1 className="title-hero">
              Coleção de <span className="text-destaq">Verão 2026</span>
            </h1>
            <p className="des-hero">
              Descubra as últimas tendências com até{' '}
              <span className="text-destaq">50% de desconto</span>. Ofertas por tempo limitado.
            </p>
          </div>
          <div className="btns-heros">
            <BtnPrimary>
              Ver catálogo <ShoppingBasketIcon />
            </BtnPrimary>
            <button className="promo">
              Promoções <ArrowRight />
            </button>
          </div>
          <div className="valid-hero">
            <div>
              <span className="text-destaq">500+</span>
              Produtos
            </div>
            <div>
              <span className="text-destaq">100+</span>
              Categorias
            </div>
            <div>
              <span className="text-destaq">100%</span>
              Qualidade
            </div>
          </div>
        </div>

        <div className="context-hero-img">
          <img src="src\assets/head-img.jpg" alt="" />
        </div>
      </section>

      <article>
        <div className="title-category">
          <h2>Categorias em Destaque</h2>
          <p>Explore nossas principais categorias</p>
        </div>

        <div className="categorys">
          <Category />
        </div>
      </article>

      <section className="cards-product">
        <div className="title-section-cards">
          <div className="title-cards">
            <h2>Produtos em Destaque</h2>
            <p>Selecionados especialmente para você</p>
          </div>

          <div>
            <a href="#">
              Ver todos <ArrowRight />
            </a>
          </div>
        </div>

        <div className="content-cards">{loading ? <Loading /> : error ? <Error /> : <Cards />}</div>
      </section>
    </main>
  );
}
