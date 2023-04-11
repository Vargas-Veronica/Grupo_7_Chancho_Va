module.exports = function(sequelize, DataTypes) {

    let alias = "Category";

    let cols = {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false
    };

    const CATEGORY = sequelize.define(alias, cols, config);

    return CATEGORY;
    
    }
