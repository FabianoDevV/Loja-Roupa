import { useContext, useEffect } from 'react';
import BtnPrimary from '../BtnPrimary';
import './style-card.css';
import { dateContext } from '../../context/dateContext';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';

export default function Cards({ qtd, filter }) {
  const { products, cart, setCart } = useContext(dateContext);

  let product = products;

  if (qtd) product = products.slice(0, qtd);

  if (filter) product = products.filter((p) => p.category.name === filter);

  // Adicionando o produto no carrinho
  function AddToCart(product) {
    setCart((prevCart) => {
      // validação: ver se o produto ja existe no carrinho
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        // quantidade de produto no msm carrinho
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return product.map((product) => {
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
