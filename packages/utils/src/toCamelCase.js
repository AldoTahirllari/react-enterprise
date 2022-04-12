export const toCamelCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/^\w/, (c) => c.toLowerCase());
