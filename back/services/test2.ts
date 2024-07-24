import db, { sequelize } from "../models/sequelize";

const test2 = async (number: number) => {
  if (Number.isNaN(number)) return undefined;
  if (number == -1) return undefined;
  const productInfo = await db.Product.findOne({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(select COUNT(*) from reviews as review where review.product_id = ${number})`
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
            `(select nickname from users as user where user.id = ${
              sequelize.col("seller_id").col
            })`
          ),
          "nickName",
        ],
        [
          sequelize.literal(
            `(select category from categories as category where category.id = ${
              sequelize.col("category_id").col
            })`
          ),
          "category",
        ],
      ],
    },
    where: { id: 2 },
  });
  return productInfo;
};

export default test2;
