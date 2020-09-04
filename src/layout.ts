export const w = (config) => (value) => ({
  width: value,
});

export const minW = (config) => (value) => ({
  minWidth: value,
});

export const maxW = (config) => (value) => ({
  maxWidth: value,
});

export const h = (config) => (value) => ({
  height: value,
});

export const minH = (config) => (value) => ({
  minHeight: value,
});

export const maxH = (config) => (value) => ({
  maxHeight: value,
});

export const boxSize = (config) => (value) => ({
  width: value,
  height: value,
});
