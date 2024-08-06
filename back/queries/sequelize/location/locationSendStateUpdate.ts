import { Op } from "sequelize";
import db from "../../../models/sequelize";

const locationSendStateUpdateQuery = async (number: number) => {
  try {
    if (Number.isNaN(number)) return undefined;
    if (number === -1) return undefined;
    const productInfo = await db.Product.findAll({
      where: {
        deliveryStatus: 0,
        deliveryUserId: number,
        deletedAt: null,
      },
    });
    for (let item of productInfo ? productInfo : []) {
      item.update({ deliveryStatus: 1 });
    }
    return productInfo;
  } catch (err) {
    console.error(err);
  }
};

export default locationSendStateUpdateQuery;
