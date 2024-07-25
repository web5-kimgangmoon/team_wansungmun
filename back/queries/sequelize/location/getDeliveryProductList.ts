import { Op } from "sequelize";
import db, { sequelize } from "../../../models/sequelize";

const getDeliveryProductListQuery = async (number: number) => {
  try {
    if (Number.isNaN(number)) return undefined;
    if (number == -1) return undefined;
    const productInfo = await db.Product.findAll({
      attributes: [
        "tradeLocation",
        "id",
        [sequelize.col("product_name"), "name"],
        "deliveryStatus",
        "deletedAt",
      ],
      where: {
        deliveryUserId: number,
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
        attributes: {
          include: [
            [
              sequelize.literal(
                `(SELECT phone_num from users as user where user.id = tradeReceipts.customer_id)`
              ),
              "phone",
            ],
          ],
        },
        where: { deletedAt: null },
      },
    });

    return productInfo;
  } catch (err) {
    console.error(err);
  }
};

export default getDeliveryProductListQuery;
