const router = require('express').Router();
const budgetRoutes = require('./budgetRoutes.js');
const userRoutes = require('./userRoutes.js');
const expenseRoutes = require('./expenseRoutes');

router.use('/user', userRoutes);
router.use('/budget', budgetRoutes);
router.use('/expense', expenseRoutes);

module.exports = router;