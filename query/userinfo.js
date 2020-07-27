module.exports = (sequelize, DataTypes) => {
    return sequelize.define('userinfo', {
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        passwd:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};