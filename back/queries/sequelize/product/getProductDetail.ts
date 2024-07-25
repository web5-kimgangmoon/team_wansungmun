import { Op } from "sequelize";
import db, { sequelize } from "../../../models/sequelize";

const getProductDetailQuery = async (number: number) => {
  if (Number.isNaN(number)) return undefined;
  if (number == -1) return undefined;
  const productInfo = await db.Product.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(select COUNT(*) from reviews as review where review.product_id = id)`
          ),
          "reviewCount",
        ],
        [
          sequelize.literal(
            `(select average_score from users as user where user.id = seller_id)`
          ),
          "averageScore",
        ],
        [
          sequelize.literal(
            `(select nickname from users as user where user.id = seller_id)`
          ),
          "nickName",
        ],
        [
          sequelize.literal(
            `(select category from categories as category where category.id = category_id)`
          ),
          "category",
        ],
      ],
    },
    where: {
      id: number,
      [Op.or]: [
        { deletedAt: null },
        { deletedAt: { [Op.gt]: Date.now() - 86400000 }, tradeStatus: 3 },
      ],
    },
  });
  return productInfo;
};

export default getProductDetailQuery;
