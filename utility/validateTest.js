async function validateLength(input, digits) {
  if (input) {
    return input.toString().length === digits;
  } else {
    return false;
  }
}

async function validateExpiry(input) {
  if (input) {
    if (input.match(/^(0\d|1[0-2])\/\d{4}$/)) {
      const { 0: month, 1: year } = input.split("/");
      const expiry = new Date(year, month);
      const current = new Date();
      return expiry.getTime() > current.getTime();
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export { validateLength, validateExpiry };
