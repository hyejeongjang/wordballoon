module.exports = (sequelize, DataTypes) => {
    return sequelize.define('userhistory', {
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
            unique: true,
            //foreignkey 설정
        },
        videoId: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            //foreignkey 설정
        },
        userLike: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })
};