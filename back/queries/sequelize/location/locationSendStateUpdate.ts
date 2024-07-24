import { Op } from "sequelize";
import db from "../../../models/sequelize";

const locationSendStateUpdateQuery = async (number: number) => {
  if (Number.isNaN(number)) return undefined;
  if (number == -1) return undefined;
  const productInfo = await db.Product.findAll({
    where: { deliveryStatus: 0, deliveryUserId: number },
  });
  for (let item of productInfo ? productInfo : []) {
    await item.update({ deliveryStatus: 1 });
  }
  return productInfo;
};

export default locationSendStateUpdateQuery;
