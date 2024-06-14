function sleep(ms) {
  const until = Date.now() + ms;
  while (Date.now() < until) continue;
}

export async function request(url, options) {
  // Makes this function block the main-thread for 200ms
  sleep(200);

  return fetch(url, options)
    .then((data) => data.json())
    .catch((e) => console.error(`[Workshop] Request error: ${e}`));
}
