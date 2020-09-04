export const p = (config) => (value) => ({
  paddingTop: value,
  paddingBottom: value,
  paddingLeft: value,
  paddingRight: value,
});

export const pt = (config) => (value) => ({
  paddingTop: value,
});

export const pr = (config) => (value) => ({
  paddingRight: value,
});

export const pb = (config) => (value) => ({
  paddingBottom: value,
});

export const pl = (config) => (value) => ({
  paddingLeft: value,
});

export const px = (config) => (value) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const py = (config) => (value) => ({
  paddingTop: value,
  paddingBottom: value,
});
