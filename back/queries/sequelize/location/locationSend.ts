import { Op } from "sequelize";
import db from "../../../models/sequelize";

const locationSendQuery = async (number: number) => {
  try {
    if (Number.isNaN(number)) return undefined;
    if (number == -1) return undefined;
    const productInfo = await db.Product.findAll({
      where: {
        deliveryStatus: { [Op.or]: [0, 1] },
        deliveryUserId: number,
        deletedAt: null,
      },
    });
    return productInfo;
  } catch (err) {
    console.error(err);
  }
};

export default locationSendQuery;
