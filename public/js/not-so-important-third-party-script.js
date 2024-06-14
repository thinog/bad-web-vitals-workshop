var _$_56c2 = [
  "now",
  "[Workshop] Starting a third-party script not so important \ud83d\ude03",
  "log",
  "defer",
  "currentScript",
  " ms \ud83d\ude4f",
];
async function run() {
  const zz = 1000;
  const s = Date[_$_56c2[0]]();
  console[_$_56c2[2]](_$_56c2[1]);
  if (document[_$_56c2[4]][_$_56c2[3]]) {
    await new Promise((r) => {
      return setTimeout(r, zz);
    });
  } else {
    const u = Date[_$_56c2[0]]() + zz;
    while (Date[_$_56c2[0]]() < u) {
      continue;
    }
  }
  const f = Date[_$_56c2[0]]() - s;
  console[_$_56c2[2]](
    "[Workshop] The not-so-important third-party script has been executed! It only took " +
      f +
      _$_56c2[5],
  );
}
run();
