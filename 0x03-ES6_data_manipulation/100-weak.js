const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const key = JSON.stringify(endpoint);
  let count = weakMap.get(key) || 0;
  count += 1;
  weakMap.set(key, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
