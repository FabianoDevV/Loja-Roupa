import { useContext } from 'react';
import BtnPrimary from '../BtnPrimary';
import './style-card.css';
import { dateContext } from '../../context/dateContext';

export default function Cards() {
  const { products } = useContext(dateContext);
  const productLimit = products.slice(0, 20);

  return productLimit.map((product) => {
    const { id, description, price, images, title } = product;
    return (
      <div className="card" key={id}>
        <div className="img-card">
          <img src={images[0]} alt="" />
        </div>
        <div className="infor-card">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="about-card">
            <span>R$: {price}</span>
            <span>
              <BtnPrimary>comprar</BtnPrimary>
            </span>
          </div>
        </div>
      </div>
    );
  });
}
