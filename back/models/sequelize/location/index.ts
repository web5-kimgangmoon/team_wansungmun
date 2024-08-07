import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import User from "../user";

class Location extends Model<
  InferAttributes<Location>,
  InferCreationAttributes<Location>
> {
  id!: CreationOptional<number>;

  location!: string;
  locationDetail!: CreationOptional<string>;
  latitude!: CreationOptional<number>;
  longitude!: CreationOptional<number>;

  createdAt!: CreationOptional<Date>;
  updatedAt!: CreationOptional<Date>;
  deletedAt!: CreationOptional<Date | null>;

  userId!: ForeignKey<User["id"]>;

  static initTable(sequelize: Sequelize) {
    Location.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        location: {
          type: new DataTypes.STRING(100),
          allowNull: false,
        },
        locationDetail: {
          type: new DataTypes.STRING(100),
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
        modelName: "Location",
        tableName: "location_list",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
}

export default Location;
