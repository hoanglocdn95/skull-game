export const createIDRoom = (): string => {
  const random0To9 = (): number => Math.round(Math.random() * 9);
  return `${random0To9()}${random0To9()}${random0To9()}${random0To9()}`;
};
