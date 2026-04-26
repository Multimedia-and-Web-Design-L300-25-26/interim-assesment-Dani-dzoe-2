const Product = require('./models/product.model.js');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello from Node API");
});

app.post('/api/products', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});


mongoose.connect("mongodb+srv://danieldzotepe568_db_user:Ew5r2TJ90Ged0Dz3@backenddb.nm1zljw.mongodb.net/?appName=backenddb")
.then(() => {
	console.log("Connected to database!");
	app.listen(3000, () => {
		console.log('Server is running on port 3000');
});
})
.catch(() => {
	console.log("Connection failed");
});

