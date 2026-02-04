import { useState, useEffect } from 'react';
import { dateContext } from '../dateContext';

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

        const validProducts = data
          .filter((p) => {
            const imgUrl = p.images?.[0] || '';
            const urlInvalid = [
              'placeimg.com',
              'placehold.co',
              'api.escuelajs.co/api/v1/files/',
              'images.unsplash.com',
            ];

            // sem imagem → remove
            if (!imgUrl) return false;

            // se tiver domínio inválido → remove
            if (urlInvalid.some((p) => imgUrl.includes(p))) return false;

            // se preço menor que 20 → remove
            if (p.price > 8000) return false;

            return true;
          })
          .map((p) => ({
            ...p,
            price: p.price * 2,
          }));

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
