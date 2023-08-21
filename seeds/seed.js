const sequelize = require('../config/connection');
const { User, Expense, Budget } = require('../models');

const userData = require('./userData.json');
const expenseData = require('./expenseData.json');
const budgetData = require('./budgetData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const budget of budgetData) {
    await Budget.create({
      ...budget,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const expense of expenseData) {
    await Expense.create({
      ...expense,
      budget_id: users[Math.floor(Math.random() * users.lenght)].id,
    });
  }

  process.exit(0);
};

seedDatabase();