import db from "../../../models/mongoose/db";

const getLocationQuery = async (product_ID: number, purchaser_ID: number) => {
  if (Number.isNaN(product_ID) || Number.isNaN(purchaser_ID)) return undefined;
  if (product_ID === -1 || purchaser_ID === -1) return undefined;
  const time = await db.Delivery_log.find(
    {
      product_ID,
      purchaser_ID,
    },
    null,
    { sort: { createdAt: 1 }, limit: 1 }
  );
  const info = await db.Delivery_log.find(
    {
      product_ID,
      purchaser_ID,
    },
    null,
    { sort: { createdAt: -1 }, limit: 2 }
  );
  console.log(info);
  return {
    firstLog: time,
    info: info,
  };
};

export default getLocationQuery;
