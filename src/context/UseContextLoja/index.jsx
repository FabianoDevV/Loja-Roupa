import { useState, useEffect } from 'react';
import { dateContext } from '../dateContext';

export default function UseContextLoja({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
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
    <dateContext.Provider value={{ products, error, loading, setProducts }}>
      {children}
    </dateContext.Provider>
  );
}
