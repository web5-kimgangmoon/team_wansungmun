import db from "../../../models/mongoose/db";

const locationGetQuery = async (product_ID: number, purchaser_ID: number) => {
  const info = await db.Delivery_log.find(
    {
      product_ID,
      purchaser_ID,
    },
    null,
    { limit: 2 }
  );
  return info;
};

export default locationGetQuery;
