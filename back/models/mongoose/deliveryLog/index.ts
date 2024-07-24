import { Schema, model, connect } from "mongoose";

interface IDelivery_log {
  product_ID: number;
  purchaser_ID: number;
  chasedLocation_latitude: number;
  chasedLocation_longitude: number;
}

const schema = new Schema<IDelivery_log>({
  product_ID: { type: Number, required: true },
  purchaser_ID: { type: Number, required: true },
  chasedLocation_latitude: { type: Number },
  chasedLocation_longitude: { type: Number },
});

const Delivery_log = model<IDelivery_log>("Delivery_log", schema);

export default Delivery_log;
