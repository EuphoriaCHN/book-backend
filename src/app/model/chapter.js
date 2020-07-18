/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chapter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'id'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '章节描述'
    },
    bookId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: '所属书籍编号',
      field: 'book_id'
    },
    keyword1: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '关键字1',
      field: 'keyword_1'
    },
    keyword2: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '关键字2',
      field: 'keyword_2'
    },
    keyword3: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '关键字3',
      field: 'keyword_3'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'pdf path'
    }
  }, {
    sequelize,
    tableName: 'chapter',
    timestamps: false,
    underscored: true
  });
};
