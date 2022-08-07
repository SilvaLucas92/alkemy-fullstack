import { Sequelize } from "sequelize";
import db from '../config/database.js';
import Movement from "./Movements.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(255)
    }
},{
    freezeTableName: true
});

User.associate = (models) => {
    User.hasMany(models.Movement, {
        as:'movements',
        foreignKey: 'user_id'
    })
}

export default User;