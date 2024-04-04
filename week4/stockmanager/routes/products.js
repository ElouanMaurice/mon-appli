const route = require("../products.test")
const data = require("../data")

router.get('/products/byId/:id', (req, res) => {
    const idNumber = Number(req.params.id)
    const product = data.find(product => product.id === Number(id))
    res.json({ product });
   });