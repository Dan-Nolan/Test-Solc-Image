const { exec } = require('child_process');

// bin: https://github.com/ethereum/solc-bin/tree/gh-pages/linux-amd64

exec(`./solc-linux-amd64-v0.7.6+commit.7338295f --version`, (err, stdout, stderr) => {
  console.log({
    err, stdout, stderr
  });
});

exec(`./solc-linux-amd64-v0.7.5+commit.eb77ed08 --version`, (err, stdout, stderr) => {
  console.log({
    err, stdout, stderr
  });
});
