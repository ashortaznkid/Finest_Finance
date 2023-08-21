const router = require('express').Router();
const { where } = require('sequelize');
const { Expense } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const expenseData = await Expense.create({...req.body, budget_id: req.params.budget_id,});
        res.status(200).json(expenseData);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const expenseData = await Expense.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!expenseData[0]) {
            res.status(404).json({ message: 'No expense found with this id'});
            return;
        }
        res.status(200).json(expenseData);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const expenseData = await Expense.destroy({
            where: {
                id: req.paramsid,
            }
        });
        if (!expenseData) {
            res.status(404).json({ message: 'No expense found with this id'});
            return;
        }
        res.status(200).json(expenseData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;