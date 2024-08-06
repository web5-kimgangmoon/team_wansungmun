import { Op } from "sequelize";
import db, { sequelize } from "../../../../models/sequelize";

const getFixedLocation = async (userId: number, productId: number) => {
  try {
    if (Number.isNaN(userId) || Number.isNaN(productId)) return undefined;
    if (userId === -1 || productId === -1) return undefined;
    const destinationNStart = await db.TradeReceipt.findOne({
      where: { productId: productId, customerId: userId },
      include: {
        model: db.Product,
        as: "product",
        attributes: ["latitude", "longitude", "tradeLocation"],
        where: {
          id: productId,
          [Op.or]: [
            {
              deliveryStatus: { [Op.or]: [0, 1] },
              deletedAt: null,
            },
            {
              deliveryStatus: 2,
              deletedAt: { [Op.gt]: Date.now() - 86400000 },
            },
          ],
        },
      },
    });
    return destinationNStart;
  } catch (err) {
    console.error(err);
  }
};

export default getFixedLocation;
