import configMySQL from "./config/config.json";
import { Sequelize, Options } from "sequelize";
import User from "./user";
import Location from "./location";
import Product from "./product";
import Category from "./category";
import Review from "./review";
import Report from "./report";
import TradeReceipt from "./tradeReceipt";

const config = configMySQL["development"];

export const sequelize = new Sequelize(config as Options);
const db = { User, Location, Product, Category, Review, Report, TradeReceipt };

Object.values(db).forEach((model) => {
  model.initTable(sequelize);
});

User.hasMany(Location, {
  sourceKey: "id",
  foreignKey: "userId",
  // as: "location_list", // 왠지 오류
  as: { singular: "location", plural: "locationList" },
});
Category.hasMany(Product, {
  sourceKey: "id",
  foreignKey: "categoryId",
  as: "products",
});
User.hasMany(Review, {
  sourceKey: "id",
  foreignKey: "reviewerId",
  as: "reviewers",
});
User.hasMany(Review, {
  sourceKey: "id",
  foreignKey: "sellerId",
  as: "sellers",
});

Product.hasMany(Review, {
  sourceKey: "id",
  foreignKey: "productId",
  as: "reviews",
});

User.hasMany(Report, {
  sourceKey: "id",
  foreignKey: "reporterId",
  as: "reports",
});
User.hasMany(TradeReceipt, {
  sourceKey: "id",
  as: "tradeReceipts",
  foreignKey: "customerId",
});
Product.hasMany(Report, {
  sourceKey: "id",
  as: "reports",
  foreignKey: "productId",
});
Product.hasMany(TradeReceipt, {
  sourceKey: "id",
  as: "tradeReceipts",
  foreignKey: "productId",
});

export default db;
