import db from "../../../models/mongoose/db";

const locationSendQuery = async (
  lat: number,
  lng: number,
  product_ID: number,
  purchaser_ID: number
) => {
  const info = await db.Delivery_log.create({
    lat,
    lng,
    product_ID,
    purchaser_ID,
    createdAt: new Date(),
  });
  return info;
};

export default locationSendQuery;
