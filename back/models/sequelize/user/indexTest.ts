// import {
//   Model,
//   Options,
//   DataTypes,
//   InferAttributes,
//   InferCreationAttributes,
//   CreationOptional,
//   NonAttribute,
//   Sequelize,
//   ModelDefined,
//   HasManyGetAssociationsMixin,
//   HasManyAddAssociationMixin,
//   HasManyAddAssociationsMixin,
//   HasManySetAssociationsMixin,
//   HasManyRemoveAssociationMixin,
//   HasManyRemoveAssociationsMixin,
//   HasManyHasAssociationMixin,
//   HasManyHasAssociationsMixin,
//   HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin,
//   Optional,
// } from "sequelize";
// import Location from "../location";
// // import { sequelize } from "..";
// import configMySQL from "../config/config.json";

// const config = configMySQL["development"];
// const sequelize = new Sequelize(config as Options);

// interface associationLocation {
//   getLocationList: HasManyGetAssociationsMixin<Location>;
//   addLocation: HasManyAddAssociationMixin<Location, Location["userId"]>;
//   addLocationList: HasManyAddAssociationsMixin<Location, Location["userId"]>;
//   setLocationList: HasManySetAssociationsMixin<Location, Location["userId"]>;
//   removeLocation: HasManyRemoveAssociationMixin<Location, Location["userId"]>;
//   removeLocationList: HasManyRemoveAssociationsMixin<
//     Location,
//     Location["userId"]
//   >;
//   hasLocation: HasManyHasAssociationMixin<Location, Location["userId"]>;
//   hasLocationList: HasManyHasAssociationsMixin<Location, Location["userId"]>;
//   countLocationList: HasManyCountAssociationsMixin;
//   createLocation: HasManyCreateAssociationMixin<Location, "userId">;
// }

// interface UserAttributes extends associationLocation {
//   id: number;
//   email: string;
//   phoneNum: string;
//   point: number;
//   averageScore: number;
//   priority: number;
// }

// type UserCreationAttributes = Optional<
//   UserAttributes,
//   "id" | "point" | "averageScore" | "priority" | keyof associationLocation
// >;

// const User: ModelDefined<UserAttributes, UserCreationAttributes> =
//   sequelize.define(
//     "User",
//     {
//       id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       email: {
//         type: new DataTypes.STRING(50),
//         unique: true,
//         allowNull: false,
//       },
//       phoneNum: {
//         type: new DataTypes.STRING(15),
//         unique: true,
//         allowNull: false,
//       },
//       point: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false,
//         defaultValue: 0,
//       },
//       averageScore: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//         defaultValue: 0,
//       },
//       priority: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false,
//         defaultValue: 1,
//       },
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,
//       deletedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//     },
//     {
//       modelName: "User",
//       tableName: "users",
//       timestamps: true,
//       underscored: true,
//       paranoid: true,
//     }
//   );

export default "";
