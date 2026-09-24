const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	// res.sendFile("script/Contoh1/index.html", {root: __dirname});
	res.sendFile("script/Contoh2/index.html", {root: __dirname});
});

app.listen(PORT, () => {
	//console.log(`Express Server running at http://localhost:${PORT}/`);
	console.log(`Now listening on port ${PORT}/`)
});
