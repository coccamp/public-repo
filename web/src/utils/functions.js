exports.removeNbsp = (value) => {
  if (value) return value.replace(/\u00a0/g, ' ');
  return value;
};
