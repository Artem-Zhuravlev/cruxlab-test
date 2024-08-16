const fs = require('fs')

// Check if password passed by validation rule
function isValidPassword (row) {
  if (!row.includes(':')) return;

  const [rules, password] = row.split(':');

  // Rules part of the row
  const [character, range] = rules.split(' ');
  const [min, max] = range.split('-').map(Number);

  // Length of letters in row
  const lettersLength = (password.match(new RegExp(character, 'g')) || []).length;

  return lettersLength >= min && lettersLength <= max;
 }

// Return amount of valid passwords
function validPasswordsCounter (rows) {
  return rows.reduce((acc, item) => {
    return isValidPassword(item) ? acc + 1: acc;
  }, 0)
 }

try {
  const result = fs.readFileSync('passwords.txt', 'utf-8');
  const rows = result.split('\n');

  const validPasswords = validPasswordsCounter(rows);
  console.log(validPasswords)
} catch (err) {
  console.error(err);
}
