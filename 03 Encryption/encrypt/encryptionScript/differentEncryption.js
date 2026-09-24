const crypto = require('crypto');

const plainText = 'Password Sangat Rahasia';

function encryptWithAlgorithm(algorithm, keySize, ivSize, plainText) {
	const key = crypto.randomBytes(keySize);
	const iv = crypto.randomBytes(ivSize);

	const cipher = crypto.createCipheriv(algorithm, key, iv);

	let encrypted = cipher.update(plainText, 'utf8', 'hex');
	encrypted += cipher.final('hex');

	return {
		algorithm,
		encrypted,
		key: key.toString('hex'),
		iv: iv.toString('hex')
	};
}

const algorithms = [
	{ name: 'aes-128-cbc', keySize: 16, ivSize: 16 },
	{ name: 'aes-192-cbc', keySize: 24, ivSize: 16 },
	{ name: 'aes-256-cbc', keySize: 32, ivSize: 16 },
	{ name: 'aes-256-gcm', keySize: 32, ivSize: 16 },
	{ name: 'aes-128-gcm', keySize: 32, ivSize: 16 }
];

algorithms.forEach(algo => {
	try {
		const result = encryptWithAlgorithm(algo.name, algo.keySize, algo.ivSize, plainText);
		console.log(`Encrypted with ${result.algorithm}: ${result.encrypted}`);
	} catch (error) {
		console.error(`Error with ${algo.name}: ${error.message}`);
	}
});