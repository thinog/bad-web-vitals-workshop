async function run() {
  const startedAt = Date.now();

  console.log("[Workshop] Starting a third-party script not so important 😃");

  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  const waitUntil = Date.now() + 1500;
  while (Date.now() < waitUntil) continue;

  const finishedAt = Date.now() - startedAt;

  console.log(
    `[Workshop] The not-so-important third-party script has been executed! It only took ${finishedAt} ms 🙏`,
  );
}

run();
