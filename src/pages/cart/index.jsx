import './style.css';
import CardToCart from '../../Components/cardToCart';

import { useContext } from 'react';
import { dateContext } from '../../context/dateContext';
import BtnPrimary from '../../Components/BtnPrimary';
import ErrorCart from '../../Components/ErrorCart';

export default function Cart() {
  const { cart } = useContext(dateContext);
  console.log(cart.length);
  return (
    <section className="section-cart">
      {cart.length ? (
        <>
          <CardToCart cart={cart} />

          <div className="values-cart">
            <h3 className="title-cart">Resumo do pedido</h3>

            <div className="infor-orders">
              <div className="infor-product-values">
                <span>SubTotal</span>
                <span>R$ 1000</span>
              </div>
              <div className="infor-product-values">
                <span>Frete</span>
                <span>GRÁTIS</span>
              </div>
              <div className="infor-product-values">
                <span>Desconto</span>
                <span>R$ 100</span>
              </div>
            </div>

            <div>
              <div className="product-value-total">
                <span>Total</span>
                <span>R$ 1958,08</span>
              </div>
              <span>Ou 12x de R$ 175,90</span>
            </div>

            <div className="button-cart">
              <span className="cart-comprar">
                <BtnPrimary>Finalizar Compra</BtnPrimary>
              </span>
              <span className="cart-cupom">
                <BtnPrimary>Adicionar cupom</BtnPrimary>
              </span>
            </div>
          </div>
        </>
      ) : (
        <ErrorCart msg="Nenhum produto encontrado." />
      )}
    </section>
  );
}
