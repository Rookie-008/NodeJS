const crypto = require('crypto');

const key = Buffer.from('pesansangatrahasia', 'hex');
const iv = Buffer.from('passwordrahasia', 'hex');

const encryptedText = '39ed65b6b7487d059d27206d056e659463ce89475c9d47ac2e06ffc90962041d';

const algorithm = 'aes-256-cbc';
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Encrypted Text: ', encryptedText);
console.log('Decrypted Text: ', decrypted);
