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

class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  id!: CreationOptional<number>;
  score!: number;
  imgs!: string;
  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date>;

  reviewerId!: ForeignKey<User["id"]>;
  sellerId!: ForeignKey<User["id"]>;
  productId!: ForeignKey<Product["id"]>;

  static initTable(sequelize: Sequelize) {
    Review.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        score: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        imgs: {
          type: new DataTypes.STRING(1000),
          allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "Review",
        tableName: "reviews",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
}

export default Review;
