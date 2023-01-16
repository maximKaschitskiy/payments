async function validateLength(input, digits) {
  if (input) {
    return input.toString().length === digits;
  } else {
    return false;
  }
}

async function validateMonth(input) {
  if (input) {
    const {
      0: month,
      1: year
    } = input.split("/");
    if (!(month > 12)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

async function validateFormat(input) {
  if (input) {
    return new RegExp(/^(0\d|1[0-2])\/\d{4}$/).test(input);
  } else {
    return false;
  }
}

async function validateExpiry(input) {
  if (input) {
    const {
      0: month,
      1: year
    } = input.split("/");
    const expiry = new Date(year, month);
    const current = new Date();
    return expiry.getTime() > current.getTime();
  } else {
    return false;
  }
}

export {
  validateLength,
  validateMonth,
  validateExpiry,
  validateFormat
};