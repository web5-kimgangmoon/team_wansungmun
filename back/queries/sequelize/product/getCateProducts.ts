import { Op } from "sequelize";
import db, { sequelize } from "../../../models/sequelize";

const getCateProductsQuery = async (number: number) => {
  if (Number.isNaN(number)) number = 1;

  const cate = await db.Category.findOne({
    where: { id: number, deletedAt: null },
    include: [
      {
        model: db.Product,
        as: "products",
        attributes: {
          include: [
            [
              sequelize.literal(
                `(select COUNT(*) from reviews as review where review.seller_id = products.seller_id)`
              ),
              "reviewCount",
            ],
            [
              sequelize.literal(
                `(select average_score from users as user where user.id = products.seller_id)`
              ),
              "avarageScore",
            ],
            [
              sequelize.literal(
                `(select nickname from users as user where user.id = products.seller_id)`
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
    ],
  });

  return cate;
};

export default getCateProductsQuery;
