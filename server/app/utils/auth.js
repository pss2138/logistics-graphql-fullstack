export function generateId() {
  // TODO : Add ID generating function
  return (Math.random() * 10000000000).toFixed(0).toString();
}

export function getUser(token) {
  return new Promise((resolve, reject) => {
    try {
      if (token && token !== "") {
        // dummy user data from token
        resolve({
          id: "12345",
          username: "Ken",
          email: "test1234321@gmail.com",
        });
      }
      resolve(null);
    } catch (error) {
      reject(null);
    }
  });
}

export function getPriceId() {
  // Retrieve price amount and price id from model || stripe product
  return "priceId";
}
