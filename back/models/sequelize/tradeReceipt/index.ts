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

  destination!: CreationOptional<string>;
  destinationDetail!: CreationOptional<string>;
  tradeRequest!: CreationOptional<String>;
  latitude!: CreationOptional<number>;
  longitude!: CreationOptional<number>;

  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date | null>;

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
        destination: {
          type: new DataTypes.STRING(300),
          allowNull: true,
        },
        destinationDetail: {
          type: new DataTypes.STRING(100),
          allowNull: true,
        },
        tradeRequest: {
          type: new DataTypes.STRING(500),
          allowNull: true,
        },
        latitude: {
          type: DataTypes.FLOAT,
        },
        longitude: {
          type: DataTypes.FLOAT,
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
