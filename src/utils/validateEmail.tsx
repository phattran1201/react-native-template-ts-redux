export const validateEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const emailValidate =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidate?.test(String(email)?.trim().toLowerCase());
};

export const maskEmail = (email: string) => {
  if (email) {
    let array = email?.split('@');
    array[0] += '@';
    const firstPart = array[0].replace(/(?<=.{3}).(?=[^@]*?@)/g, '*');
    let array2 = array[1].split('.');
    array2[0] += '.';
    const secondPart = array2[0].replace(/(?<=.{3}).(?=[^.]*?\.)/g, '*');
    const thirdPart = array2[1].substring(0, 2);
    const mask = array2[1].substring(array2[1].length - 1).replace(/[a-zA-Z0-9]/g, '*');
    return firstPart + secondPart + thirdPart + mask;
  }
  return '';
};
