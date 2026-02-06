export function filterProductValid(data) {
  return data
    .filter((p) => {
      const imgUrl = p.images?.[0] || '';

      // sem imagem → remove
      if (!imgUrl) return false;

      // Se não for a URL oFicial → Remove
      if (!imgUrl.includes('i.imgur.com')) return false;

      // Se o preço tiver bugado → remove
      if (p.price > 8000) return false;

      return true;
    })
    .map((p) => ({
      ...p,
      price: p.price * 2,
    }));
}
