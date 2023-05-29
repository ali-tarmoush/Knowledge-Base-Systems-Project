/**
 * Is the card number The card number exists?
 *
 * @param {*} idCard
 * @param {*} data
 *
 *@return
 */
export const testCardNumber = (idCard, data) => {
  for (let i = 0; i < data.length; i++) {
    if (idCard === data[i].id) {
      return data[i];
    }
  }
  return null;
};
/**
 * Is the card date valid?
 *
 * @param {*} cade
 * @returns
 */
export const cardDateValid = (cade) => {
  var today = new Date();
  var dateValidity = cade["validity"];
  if (dateValidity >= today) {
    return true;
  } else {
    return false;
  }
};
/**
 *Is the password correct?
 *
 * @param {*} inpassword
 * @param {*} cade
 */
export const passwordCorrect = (inpassword, cade) => {
  if (inpassword === cade["password"]) {
    return true;
  } else {
    return false;
  }
};
const getClient = (id_client, data) => {
  for (let i = 0; i < data.length; i++) {
    if (id_client === data[i].id) {
      return data[i];
    }
  }
};

/**
 *
 *
 * @param {*} in_balance
 * @param {*} id_client
 * @param {*} data
 */
export const testAllowedAmount = (in_balance, id_client, data) => {
  var client = getClient(id_client, data);
  if (in_balance <= client.allowedAmount) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param {*} id_client
 * @param {*} data
 */
export const testNegative = (id_client, data) => {
  var client = getClient(id_client, data);
  return client.negative;
};

/**
 *
 * @param {*} ms
 * @returns
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
