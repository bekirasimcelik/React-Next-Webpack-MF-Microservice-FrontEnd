const basketSlice = await import('basket/basketSlice').then((module) => {
  return module;
});

export default basketSlice.default;
export const { addCard, deleteCard } = basketSlice;
