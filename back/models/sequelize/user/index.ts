import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
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
import Location from "../location";
import Review from "../review";
import Report from "../report";
import TradeReceipt from "../tradeReceipt";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id!: CreationOptional<number>;
  email!: string;
  phoneNum!: string;
  point!: CreationOptional<number>;
  averageScore!: CreationOptional<number>;
  authority!: CreationOptional<number>;
  password!: CreationOptional<number>;
  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date>;

  getLocationList!: HasManyGetAssociationsMixin<Location>;
  addLocation!: HasManyAddAssociationMixin<Location, Location["userId"]>;
  addLocationList!: HasManyAddAssociationsMixin<Location, Location["userId"]>;
  setLocationList!: HasManySetAssociationsMixin<Location, Location["userId"]>;
  removeLocation!: HasManyRemoveAssociationMixin<Location, Location["userId"]>;
  removeLocationList!: HasManyRemoveAssociationsMixin<
    Location,
    Location["userId"]
  >;
  hasLocation!: HasManyHasAssociationMixin<Location, Location["userId"]>;
  hasLocationList!: HasManyHasAssociationsMixin<Location, Location["userId"]>;
  countLocationList!: HasManyCountAssociationsMixin;
  createLocation!: HasManyCreateAssociationMixin<Location, "userId">;

  getReviewers!: HasManyGetAssociationsMixin<Review>;
  addReviewer!: HasManyAddAssociationMixin<Review, Review["reviewerId"]>;
  addReviewers!: HasManyAddAssociationsMixin<Review, Review["reviewerId"]>;
  setReviewers!: HasManySetAssociationsMixin<Review, Review["reviewerId"]>;
  removeReviewer!: HasManyRemoveAssociationMixin<Review, Review["reviewerId"]>;
  removeReviewers!: HasManyRemoveAssociationsMixin<
    Review,
    Review["reviewerId"]
  >;
  hasReviewer!: HasManyHasAssociationMixin<Review, Review["reviewerId"]>;
  hasReviewers!: HasManyAddAssociationsMixin<Review, Review["reviewerId"]>;
  createReviewer!: HasManyCreateAssociationMixin<Review, "reviewerId">;
  countReviewers!: HasManyCountAssociationsMixin;

  getSellers!: HasManyGetAssociationsMixin<Review>;
  addSeller!: HasManyAddAssociationMixin<Review, Review["sellerId"]>;
  addSellers!: HasManyAddAssociationsMixin<Review, Review["sellerId"]>;
  setSellers!: HasManySetAssociationsMixin<Review, Review["sellerId"]>;
  removeSeller!: HasManyRemoveAssociationMixin<Review, Review["sellerId"]>;
  removeSellers!: HasManyRemoveAssociationsMixin<Review, Review["sellerId"]>;
  hasSeller!: HasManyHasAssociationMixin<Review, Review["sellerId"]>;
  hasSellers!: HasManyAddAssociationsMixin<Review, Review["sellerId"]>;
  createSeller!: HasManyCreateAssociationMixin<Review, "sellerId">;
  countSellers!: HasManyCountAssociationsMixin;

  getReports!: HasManyGetAssociationsMixin<Report>;
  addReport!: HasManyAddAssociationMixin<Report, Report["reporterId"]>;
  addReports!: HasManyAddAssociationsMixin<Report, Report["reporterId"]>;
  setReports!: HasManySetAssociationsMixin<Report, Report["reporterId"]>;
  removeReport!: HasManyRemoveAssociationMixin<Report, Report["reporterId"]>;
  removeReports!: HasManyRemoveAssociationsMixin<Report, Report["reporterId"]>;
  hasReport!: HasManyHasAssociationMixin<Report, Report["reporterId"]>;
  hasReposrts!: HasManyHasAssociationsMixin<Report, Report["reporterId"]>;
  createReport!: HasManyCreateAssociationMixin<Report>;
  countReports!: HasManyCountAssociationsMixin;

  getTradeReceipts!: HasManyGetAssociationsMixin<TradeReceipt>;
  addTradeReceipt!: HasManyAddAssociationMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  addTradeReceipts!: HasManyAddAssociationsMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  setTradeReceipts!: HasManySetAssociationsMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  removeTradeReceipt!: HasManyRemoveAssociationMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  removeTradeReceipts!: HasManyRemoveAssociationsMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  hasTradeReceipt!: HasManyHasAssociationMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  hasTradeReceipts!: HasManyHasAssociationsMixin<
    TradeReceipt,
    TradeReceipt["customerId"]
  >;
  createTradeReceipt!: HasManyCreateAssociationMixin<TradeReceipt>;
  countTradeReceipts!: HasManyCountAssociationsMixin;

  static initTable(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },

        email: {
          type: new DataTypes.STRING(50),
          unique: true,
          allowNull: false,
        },
        password: {
          type: new DataTypes.STRING(50),
          allowNull: false,
        },
        phoneNum: {
          type: new DataTypes.STRING(15),
          unique: true,
          allowNull: false,
        },
        point: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        averageScore: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
        authority: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 1,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  }
}

export default User;
