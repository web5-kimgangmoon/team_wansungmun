import { Schema, model, connect } from "mongoose";

interface IDelivery_log {
  product_ID: number;
  purchaser_ID: number;
  lat: number;
  lng: number;
  createdAt: Date;
}

const schema = new Schema<IDelivery_log>({
  product_ID: { type: Number, required: true },
  purchaser_ID: { type: Number, required: true },
  lat: { type: Number },
  lng: { type: Number },
  createdAt: { type: Date },
});

const Delivery_log = model<IDelivery_log>("Delivery_log", schema);

export default Delivery_log;
