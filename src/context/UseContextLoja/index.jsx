import { useState, useEffect } from 'react';
import { dateContext } from '../dateContext';

import { filterProductValid } from '../../utils/filterProductValid';

export default function UseContextLoja({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) throw new Error('Error HTTP: ' + response.status);

        const data = await response.json();
        console.log(data);

        // validação do produto
        const validProducts = filterProductValid(data);
        console.log(validProducts);

        setProducts(validProducts);
        setLoading(false);
      } catch (err) {
        console.log('Erro ao buscar dados: ' + err.message);
        setError(true);
      } finally {
        setInterval(() => {
          setLoading(false);
        }, 10000);
      }
    };

    fetchData();
  }, []);

  return (
    <dateContext.Provider value={{ products, setProducts, error, loading, cart, setCart }}>
      {children}
    </dateContext.Provider>
  );
}
