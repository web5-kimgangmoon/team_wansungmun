import { Op } from "sequelize";
import db, { sequelize } from "../../../../models/sequelize";

const getDeliveryDetailQuery = async (userId: number, productId: number) => {
  try {
    if (Number.isNaN(userId) || Number.isNaN(productId)) return undefined;
    if (userId === -1 || productId === -1) return undefined;
    const productInfo = await db.Product.findOne({
      attributes: ["titleImg", "deliveryStatus"],
      where: {
        deliveryUserId: userId,
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
      include: {
        model: db.TradeReceipt,
        as: "tradeReceipts",
        attributes: [
          "destination",
          "destinationDetail",
          "trade_request",
          [
            sequelize.literal(
              `(SELECT nickname from users as user where user.id = tradeReceipts.customer_id)`
            ),
            "nickname",
          ],
          [
            sequelize.literal(
              `(SELECT phone_num from users as user where user.id = tradeReceipts.customer_id)`
            ),
            "phone_num",
          ],
        ],
      },
    });
    console.log(productInfo);
    return productInfo;
  } catch (err) {
    console.error(err);
  }
};

export default getDeliveryDetailQuery;
