async function count(n) {
  return new Promise((resolve) => {
    function loop(m) {
      if (m > 0) {
        process.stdout.write(`${m}...`);
        setTimeout(() => loop(m - 1), 1000);
      } else {
        resolve();
      }
    }
    loop(n);
  });

}

async function run() {
  await count(3);
  process.stdout.write('Hello World!\n');
}

run();
