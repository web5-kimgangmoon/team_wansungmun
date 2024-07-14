import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";
import Product from "../product";

class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  id!: CreationOptional<number>;
  category!: string;
  cateImg!: string;
  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date>;

  getProducts!: HasManyGetAssociationsMixin<Product>;
  addProduct!: HasManyAddAssociationMixin<Product, Product["categoryId"]>;
  addProducts!: HasManyAddAssociationsMixin<Product, Product["categoryId"]>;
  setProducts!: HasManySetAssociationsMixin<Product, Product["categoryId"]>;
  removeProduct!: HasManyRemoveAssociationMixin<Product, Product["categoryId"]>;
  removeProducts!: HasManyRemoveAssociationsMixin<
    Product,
    Product["categoryId"]
  >;
  hasProduct!: HasManyHasAssociationMixin<Product, Product["categoryId"]>;
  hasProducts!: HasManyHasAssociationsMixin<Product, Product["categoryId"]>;
  countProducts!: HasManyCountAssociationsMixin;
  createProduct!: HasManyCreateAssociationMixin<Product, "categoryId">;

  static initTable(sequelize: Sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        category: {
          type: new DataTypes.STRING(10),
          allowNull: false,
        },
        cateImg: {
          type: new DataTypes.STRING(100),
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "categories",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
}

export default Category;
