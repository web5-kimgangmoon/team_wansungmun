import db, { sequelize } from "../../../models/sequelize";

const getDeliveryProductListQuery = async (number: number) => {
  if (Number.isNaN(number)) return undefined;
  if (number == -1) return undefined;
  const productInfo = await db.Product.findAll({
    attributes: [
      "tradeLocation",
      "id",
      [sequelize.col("product_name"), "name"],
    ],
    where: { deliveryUserId: number },
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
    },
  });
  return productInfo;
};

export default getDeliveryProductListQuery;
