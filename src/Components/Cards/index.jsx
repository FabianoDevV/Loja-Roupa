import { useContext, useEffect, useState } from 'react';
import BtnPrimary from '../BtnPrimary';
import './style-card.css';
import { dateContext } from '../../context/dateContext';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';

export default function Cards() {
  const { products, setCart } = useContext(dateContext);
  const [productList, setProductList] = useState([]);

  // multiplica o preço por dois
  useEffect(() => {
    const transform = products
      .slice(0, 20)
      .filter((p) => {
        const urlImg = p.images[0] || '';

        const validImg =
          urlImg.includes('placehold') || urlImg.includes('any') || urlImg.includes('default');
        return !validImg;
      })
      .map((p) => ({
        ...p,
        price: p.price * 2,
      }));
    setProductList(transform);
  }, [products]);

  // Adicionando o produto no carrinho
  function AddToCart(product) {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  }

  function handleErroImg(idProductErro) {
    setProductList((prevList) => prevList.filter((p) => p.id !== idProductErro));
  }

  return productList.map((product) => {
    const { id, price, images, title } = product;

    // logica de divisão
    const priceDiv = price < 100 ? 2 : 5;
    const preco = (price / priceDiv).toFixed(2);

    return (
      <div className="card" key={id}>
        <div className="img-card">
          <img src={images[0]} alt="" onError={() => handleErroImg(product.id)} />
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
              <BtnPrimary onClick={() => AddToCart(product)}>
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
