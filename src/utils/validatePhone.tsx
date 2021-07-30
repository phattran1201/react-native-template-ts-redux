export const validatePhone = (phone: number | string) => {
  var regexp = /^[0]{1}[0-9]{2}([0-9]{3}|[0-9]{4})[0-9]{4}$/gm;
  return regexp?.test(phone?.toString());
};
