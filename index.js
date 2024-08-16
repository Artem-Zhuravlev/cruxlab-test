const fs = require('fs')

try {
  const result = fs.readFileSync('passwords.txt', 'utf-8');
  const rows = result.split('\n');

  rows.forEach((item, i) => {
    console.log(item)
  })
} catch (err) {
  console.error(err);
}
