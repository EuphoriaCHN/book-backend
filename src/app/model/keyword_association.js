/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('keywordAssociation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: '自增 ID'
    },
    keyword: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '关键字',
      unique: true
    },
    asso1: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: '联想词 1',
      field: 'asso_1'
    },
    asso2: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: '联想词 2',
      field: 'asso_2'
    },
    asso3: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: '联想词 3',
      field: 'asso_3'
    }
  }, {
    sequelize,
    tableName: 'keyword_association',
    timestamps: false,
    underscored: true
  });
};
