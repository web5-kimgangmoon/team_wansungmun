import { Op } from "sequelize";
import db, { sequelize } from "../../../../models/sequelize";

const postDeliveryCompleteQuery = async (userId: number, productId: number) => {
  try {
    if (Number.isNaN(userId) || Number.isNaN(productId)) return undefined;
    if (userId == -1 || productId == -1) return undefined;
    const productInfo = await db.Product.findOne({
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
    });

    productInfo?.deliveryStatus == 1
      ? await productInfo.update({
          deliveryStatus: 2,
          tradeStatus: 3,
          deletedAt: new Date(),
        })
      : productInfo?.deliveryStatus == 2
      ? await productInfo.update({
          deliveryStatus: 1,
          tradeStatus: 2,
          deletedAt: null,
        })
      : console.log("실행안함");
    return productInfo;
  } catch (err) {
    console.error(err);
  }
};

export default postDeliveryCompleteQuery;
