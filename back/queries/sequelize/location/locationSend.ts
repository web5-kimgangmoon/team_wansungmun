import { Op } from "sequelize";
import db from "../../../models/sequelize";

const locationSendQuery = async (number: number) => {
  if (Number.isNaN(number)) return undefined;
  if (number == -1) return undefined;
  const productInfo = await db.Product.findAll({
    where: { deliveryStatus: { [Op.or]: [0, 1] }, deliveryUserId: number },
  });
  return productInfo;
};

export default locationSendQuery;
