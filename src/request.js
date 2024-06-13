function sleep(ms) {
  const until = Date.now() + ms;
  while (Date.now() < until) continue;
}

export async function request(url) {
  await sleep(200);

  return fetch(url)
    .then((data) => data.json())
    .catch((e) => console.error(`[Workshop] Request error: ${e}`));
}
