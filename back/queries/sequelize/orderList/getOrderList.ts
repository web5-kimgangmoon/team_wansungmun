import { Op } from "sequelize";
import db, { sequelize } from "../../../models/sequelize";

const getOrderList = async (userId: number) => {
  try {
    if (Number.isNaN(userId)) return undefined;
    if (userId === -1) return undefined;
    const orderList = await db.TradeReceipt.findAll({
      where: { customerId: userId },
      include: {
        model: db.Product,
        as: "product",
        attributes: {
          include: [
            [
              sequelize.literal(
                `(select COUNT(*) from reviews as review where review.seller_id = product.seller_id)`
              ),
              "reviewCount",
            ],
            [
              sequelize.literal(
                `(select average_score from users as user where user.id = product.seller_id)`
              ),
              "avarageScore",
            ],
            [
              sequelize.literal(
                `(select nickname from users as user where user.id = product.seller_id)`
              ),
              "nickName",
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
    return orderList;
  } catch (err) {
    console.error(err);
  }
};

export default getOrderList;
