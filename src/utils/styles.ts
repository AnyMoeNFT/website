export const formatStyleSize = (size: number | string) => {
  return typeof size === 'number' ? `${size}px` : size;
};
