import { Sequelize } from "sequelize";
import db from '../config/database.js';
import User from './Users.js';

const { DataTypes } = Sequelize;

const Movement = db.define('movements', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    concept: {
        type: DataTypes.STRING(255)
    },
    amount: {
        type: DataTypes.DECIMAL(8, 2)
    },
    date: {
        type: DataTypes.DATE
    },
    type: {
        type: DataTypes.STRING(255)
    },
    user_id: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
})

Movement.associate = (models) => {
    Movement.belongsTo(models.User, {
        as:'user',
        foreignKey: 'user_id'
    })
}

export default Movement;