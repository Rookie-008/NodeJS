const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-256-cbc';
const cipher = crypto.createCipheriv(algorithm, key, iv);

const plainText = 'Pesan Sangat Rahasia';

let encrypted = cipher.update(plainText, 'urf8', 'hex');
encrypted += cipher.final('hex');

console.log('Original Text : ', plainText);
console.log('Encrypted Text : ', encrypted);
console.log('Key (HEX) : ', key.toString('hex'));
console.log('IV (HEX) : ', iv.toString('hex'));