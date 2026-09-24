const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send("Server From Express");
});

app.listen(PORT, () => {
	console.log(`Express Server running at http://localhost:${PORT}/`);
});
