import { Op } from "sequelize";
import db, { sequelize } from "../../../../models/sequelize";

const getOrderDetail = async (userId: number, productId: number) => {
  try {
    if (Number.isNaN(userId) || Number.isNaN(productId)) return undefined;
    if (userId == -1 || productId == -1) return undefined;
    if (userId == -1) return undefined;
    const orderDetail = await db.TradeReceipt.findOne({
      where: { customerId: userId, productId },
      include: {
        model: db.Product,
        as: "product",
        attributes: {
          include: [
            [
              sequelize.literal(
                `(select category from categories as category where category.id = product.category_id)`
              ),
              "category",
            ],
          ],
        },
        where: {
          [Op.or]: [
            { deletedAt: null },
            { deletedAt: { [Op.gt]: Date.now() - 86400000 }, tradeStatus: 3 },
          ],
        },
      },
    });
    return orderDetail;
  } catch (err) {
    console.error(err);
  }
};

export default getOrderDetail;
