export async function generateId() {
  // TODO : Add ID generating function
  return (Math.random() * 10000000000).toFixed(0).toString();
}
