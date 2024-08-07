import db from "../../../models/sequelize";

const getCategoryQuery = async () => {
  try {
    return await db.Category.findAll({
      attributes: ["category", "id", "cateImg"],
    });
  } catch (err) {
    console.error(err);
  }
};

export default getCategoryQuery;
