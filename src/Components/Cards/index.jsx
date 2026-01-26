import { useContext } from 'react';
import BtnPrimary from '../BtnPrimary';
import './style-card.css';
import { dateContext } from '../../context/dateContext';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';

export default function Cards() {
  const { products } = useContext(dateContext);

  // multiplica o preço por dois
  const productLimit = products.slice(0, 20).map((product) => ({
    ...product,
    price: product.price * 2,
  }));

  return productLimit.map((product) => {
    const { id, price, images, title } = product;

    // logica de divisão
    const priceDiv = price < 100 ? 2 : 5;
    const preco = (price / priceDiv).toFixed(2);

    return (
      <div className="card" key={id}>
        <div className="img-card">
          <img src={images[0]} alt="" />
        </div>
        <div className="infor-card">
          <div className="rating">
            <StarIcon color="#FFDF00" fill="yellow" />
            <StarIcon color="#FFDF00" fill="yellow" />
            <StarIcon color="#FFDF00" fill="yellow" />
            <StarIcon color="#FFDF00" fill="yellow" />
            <StarIcon color="#FFDF00" fill="yellow" />
            (5.0)
          </div>
          <h3>{title}</h3>
          <div className="about-card">
            <div>
              <h4>R$: {price.toFixed(2)}</h4>
              <span>
                Ou {priceDiv}x de R$: {preco}
              </span>
            </div>
            <div>
              <BtnPrimary>
                <ShoppingCartIcon />
                Adicionar ao Carrinho
              </BtnPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
