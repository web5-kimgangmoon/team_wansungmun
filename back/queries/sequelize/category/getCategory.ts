import db from "../../../models/sequelize";

const getCategoryQuery = async () => {
  return await db.Category.findAll({
    attributes: ["category", "id", "cateImg"],
  });
};

export default getCategoryQuery;
