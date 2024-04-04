const request = require('supertest');
const app = require('./app');

it('GET /products/byId/:id', async () => {
 const res = await request(app).get('/productsbyId/1490');

 expect(res.statusCode).toBe(200);
 expect(res.body.product).toEqual(
    [{
		id: 1490,
		brand: 'Amora',
		name: 'Ketchup',
		price: 2.25,
		unitPrice: 3.91,
		unit: 'killogram',
		batches: [
			{ id: 1420005607, quantity: 2000, shippingDate: '2042-07-05', expirationDate: '2043-07-05', recall: true },
			{ id: 1420005608, quantity: 3000, shippingDate: '2042-07-25', expirationDate: '2043-07-25', recall: true },
			{ id: 1420005609, quantity: 2000, shippingDate: '2042-10-02', expirationDate: '2043-10-02', recall: true },
		],
	},]);
});

