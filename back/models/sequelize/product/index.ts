import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Sequelize,
  ForeignKey,
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
import Category from "../category";
import Review from "../review";
import Report from "../report";
import TradeReceipt from "../tradeReceipt";
import User from "../user";

class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  id!: CreationOptional<number>;

  productName!: string;
  isDirectTrade!: CreationOptional<boolean>;

  latitude!: CreationOptional<number>;
  longitude!: CreationOptional<number>;
  tradeLocation!: string;

  titleImg!: string;
  imgs!: CreationOptional<string>;
  price!: number;
  content!: string;
  tradeStatus!: CreationOptional<number>;
  deliveryStatus!: CreationOptional<number>;
  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date | null>;

  categoryId!: ForeignKey<Category["id"]>;
  sellerId!: ForeignKey<User["id"]>;
  deliveryUserId!: ForeignKey<User["id"]>;

  getReviews!: HasManyGetAssociationsMixin<Review>;
  addReview!: HasManyAddAssociationMixin<Review, Review["productId"]>;
  addReviews!: HasManyAddAssociationsMixin<Review, Review["productId"]>;
  setReviews!: HasManySetAssociationsMixin<Review, Review["productId"]>;
  removeReview!: HasManyRemoveAssociationMixin<Review, Review["productId"]>;
  removeReviews!: HasManyRemoveAssociationsMixin<Review, Review["productId"]>;
  hasReview!: HasManyHasAssociationMixin<Review, Review["productId"]>;
  hasReviews!: HasManyHasAssociationsMixin<Review, Review["productId"]>;
  countReviews!: HasManyCountAssociationsMixin;
  createReview!: HasManyCreateAssociationMixin<Review, "productId">;

  getReports!: HasManyGetAssociationsMixin<Report>;
  addReport!: HasManyAddAssociationMixin<Report, Report["productId"]>;
  addReports!: HasManyAddAssociationsMixin<Report, Report["productId"]>;
  setReports!: HasManySetAssociationsMixin<Report, Report["productId"]>;
  removeReport!: HasManyRemoveAssociationMixin<Report, Report["productId"]>;
  removeReports!: HasManyRemoveAssociationsMixin<Report, Report["productId"]>;
  hasReport!: HasManyHasAssociationMixin<Report, Report["productId"]>;
  hasReposrts!: HasManyHasAssociationsMixin<Report, Report["productId"]>;
  createReport!: HasManyCreateAssociationMixin<Report>;
  countReports!: HasManyCountAssociationsMixin;

  getTradeReceipts!: HasManyGetAssociationsMixin<TradeReceipt>;
  addTradeReceipt!: HasManyAddAssociationMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  addTradeReceipts!: HasManyAddAssociationsMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  setTradeReceipts!: HasManySetAssociationsMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  removeTradeReceipt!: HasManyRemoveAssociationMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  removeTradeReceipts!: HasManyRemoveAssociationsMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  hasTradeReceipt!: HasManyHasAssociationMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  hasTradeReceipts!: HasManyHasAssociationsMixin<
    TradeReceipt,
    TradeReceipt["productId"]
  >;
  createTradeReceipt!: HasManyCreateAssociationMixin<TradeReceipt>;
  countTradeReceipts!: HasManyCountAssociationsMixin;

  static initTable(sequelize: Sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        productName: {
          type: new DataTypes.STRING(20),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        isDirectTrade: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        tradeLocation: {
          type: new DataTypes.STRING(100),
        },
        latitude: {
          type: DataTypes.FLOAT,
        },
        longitude: {
          type: DataTypes.FLOAT,
        },
        titleImg: {
          type: new DataTypes.STRING(1000),
        },
        imgs: {
          type: new DataTypes.STRING(1000),
        },
        price: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tradeStatus: {
          type: DataTypes.TINYINT,
          defaultValue: 1,
        },
        deliveryStatus: {
          type: DataTypes.TINYINT,
          defaultValue: 0,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: true,
        underscored: true,
        // paranoid: true,
      }
    );
  }
}

export default Product;
