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

class Report extends Model<
  InferAttributes<Report>,
  InferCreationAttributes<Report>
> {
  id!: CreationOptional<number>;

  content!: string;
  reportReason!: CreationOptional<number>;
  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date>;

  reporterId!: ForeignKey<User["id"]>;
  productId!: ForeignKey<Product["id"]>;

  static initTable(sequelize: Sequelize) {
    Report.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: new DataTypes.STRING(100),
          allowNull: false,
        },
        reportReason: {
          type: new DataTypes.TINYINT({ unsigned: true, length: 4 }),
          defaultValue: 0,
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Report",
        tableName: "reports",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
}

export default Report;
