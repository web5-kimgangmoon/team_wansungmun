import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Sequelize,
  ForeignKey,
} from "sequelize";
import User from "../user";
import Product from "../product";

class TradeReceipt extends Model<
  InferAttributes<TradeReceipt>,
  InferCreationAttributes<TradeReceipt>
> {
  id!: CreationOptional<number>;

  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date>;

  customerId!: ForeignKey<User["id"]>;
  productId!: ForeignKey<Product["id"]>;

  static initTable(sequelize: Sequelize) {
    TradeReceipt.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "TradeReceipt",
        tableName: "trade_receipts",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
}

export default TradeReceipt;
