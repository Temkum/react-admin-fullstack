import express from 'express';
import { getProducts, getCustomers } from '../controllers/client.js';

const router = express.Router();
router.get('/products', getProducts);
router.get('/clients', getCustomers);

export default router;
