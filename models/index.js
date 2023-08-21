const User = require('./User.js');
const Budget = require('./Budget.js');
const Expense = require('./Expense.js');

Budget.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Budget, Expense };