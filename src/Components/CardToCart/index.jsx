import './style.css';
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';

export default function CardToCart({ cart }) {
  if (cart.length === 0) console.log('Não existe produto no carrinho.');

  return (
    <section>
      {cart.map((p) => {
        const { id, images, title, price, qty } = p;
        const img = images[0];
        return (
          <div className="card-cart" key={id}>
            <div className="cart-img">
              <img src={img} alt={title} />
            </div>
            <div className="infor-cart">
              <h4>{title}</h4>
              <p>R$ {price}</p>
              <div className="actionCart">
                <span className="qtd-cart">
                  <span>
                    <MinusIcon />
                  </span>
                  <span>{qty}</span>
                  <span>
                    <PlusIcon />
                  </span>
                </span>

                <span className="remove-cart">
                  <Trash2Icon /> Remover
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
