import { createContext } from 'react';

export const dateContext = createContext({
  products: [],
  error: false,
  loading: true,
  setProducts: () => {},
});
