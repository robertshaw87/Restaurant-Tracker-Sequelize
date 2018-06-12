module.exports = function (sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        visited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        liked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: false
    })
    return Restaurant;
}